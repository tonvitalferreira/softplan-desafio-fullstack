package com.process.api.controller;

import com.process.api.controller.dto.SightDTO;
import com.process.api.model.JsonResponse;
import com.process.api.model.Sight;
import com.process.api.model.User;
import com.process.api.repository.SightRepositoryImpl;
import com.process.api.repository.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/sights")
public class SightController {

    @Autowired
    private UserRepositoryImpl userRepository;

    @Autowired
    private SightRepositoryImpl repository;

    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity list(@RequestAttribute(name = "userName") String userName) {
        User user = userRepository.getByUserName(userName);
        return JsonResponse.handleJSONResponseOk("sights", repository.getByIdUser(user.getId()));
    }

    @GetMapping("/get/by-id-user/{idUser}")
    @ResponseBody
    public ResponseEntity listbyIdUser(@PathVariable(value = "idUser") Long idUser) {
        return JsonResponse.handleJSONResponseOk("sights", repository.getByIdUser(idUser));
    }

    @GetMapping("/get/by-id-process/{idProcess}")
    @ResponseBody
    public ResponseEntity listbyIdProcess(@PathVariable(value = "idProcess") Long idProcess, @RequestAttribute(name = "userName") String userName) {
        User user = userRepository.getByUserName(userName);
        return JsonResponse.handleJSONResponseOk("sights", repository.getByIdProcessAndIdUser(idProcess, user.getId()));
    }

    @GetMapping("/get/{id}")
    @ResponseBody
    public ResponseEntity list(@PathVariable(value = "id") Long id) {
        Sight sight = repository.getById(id);
        if (sight == null) {
            return JsonResponse.handleJSONResponseNotFound("sight not found");
        } else {
            return JsonResponse.handleJSONResponseOk("sight", sight);
        }
    }


    @PostMapping("/save")
    @ResponseBody
    public ResponseEntity save(@RequestBody Sight sight) {
        sight = repository.save(sight);
        if (sight == null) {
            return JsonResponse.handleJSONResponseInternalError("error creating this sight");
        } else {
            return JsonResponse.handleJSONResponseOk("sight", sight);
        }
    }

    @PostMapping("/add-to-users/{idProcess}")
    @ResponseBody
    public ResponseEntity addSightToUsers(@PathVariable Long idProcess, @RequestBody @Valid SightDTO sightDTO) {
        List<Long> addedToUsers = new ArrayList<>();
        System.out.println(sightDTO.getUserList().size());
        for (Long idUser : sightDTO.getUserList()) {
            Sight sight = new Sight();
            sight.setProcessId(idProcess);
            sight.setUserId(idUser);
            sight = repository.save(sight);
            if (sight != null) {
                addedToUsers.add(idUser);
            }
        }

        return JsonResponse.handleJSONResponseOk("addedToUsers", addedToUsers);
    }


    @PutMapping("/sight-a-process/{idProcess}")
    @ResponseBody
    public ResponseEntity update(@RequestAttribute(name = "userName") String userName, @PathVariable Long idProcess, @RequestBody String text) {
        User user = userRepository.getByUserName(userName);
        Sight sight = repository.getByIdProcessAndIdUser(idProcess, user.getId());
        sight.setText(text);
        sight = repository.save(sight);
        if (sight == null) {
            return JsonResponse.handleJSONResponseInternalError("error updating this sight");
        } else {
            return JsonResponse.handleJSONResponseOk("sight", sight);
        }
    }

    @DeleteMapping("/delete/{idSight}")
    @ResponseBody
    public ResponseEntity delete(@PathVariable(name = "idSight") Long idSight) {
        if (!repository.delete(idSight)) {
            return JsonResponse.handleJSONResponseInternalError("error deleting this sight");
        } else {
            return JsonResponse.handleJSONResponseOk("deleted", true);
        }
    }

}
