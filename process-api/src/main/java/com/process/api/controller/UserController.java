package com.process.api.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.process.api.model.JsonResponse;
import com.process.api.model.User;
import com.process.api.repository.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    ObjectMapper mapper;

    @Autowired
    private UserRepositoryImpl repository;

    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity list() {
        return JsonResponse.handleJSONResponseOk("users", repository.list());
    }

    @GetMapping("/get-by-username")
    @ResponseBody
    public ResponseEntity getById(@RequestAttribute("userName") String userName) {
        User user = repository.getByUserName(userName);
        if (user == null) {
            return JsonResponse.handleJSONResponseNotFound("user not found");
        } else {
            return JsonResponse.handleJSONResponseOk("user", user);
        }
    }

    @PostMapping("/save")
    @ResponseBody
    public ResponseEntity save(@RequestBody @Valid User user) {
        user = repository.save(user);
        if (user == null) {
            return JsonResponse.handleJSONResponseInternalError("error creating this user");
        } else {
            return JsonResponse.handleJSONResponseOk("user", user);
        }
    }

    @PutMapping("/update")
    @ResponseBody
    public ResponseEntity update(@RequestBody @Valid User user) {
        user = repository.save(user);
        if (user == null) {
            return JsonResponse.handleJSONResponseInternalError("error updating this user");
        } else {
            return JsonResponse.handleJSONResponseOk("user", user);
        }
    }

    @DeleteMapping("/delete/{idUser}")
    @ResponseBody
    public ResponseEntity delete(@PathVariable(name = "idUser") Long idUser) {
        if (!repository.delete(idUser)) {
            return JsonResponse.handleJSONResponseInternalError("error deleting this user");
        } else {
            return JsonResponse.handleJSONResponseOk("deleted", true);
        }
    }

}
