package com.process.api.controller;


import com.process.api.model.JsonResponse;
import com.process.api.model.Process;
import com.process.api.model.Sight;
import com.process.api.model.User;
import com.process.api.repository.ProcessRepositoryImpl;
import com.process.api.repository.SightRepositoryImpl;
import com.process.api.repository.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/process")
public class ProcessController {

    @Autowired
    private UserRepositoryImpl userRepository;

    @Autowired
    private SightRepositoryImpl sightRepository;

    @Autowired
    private ProcessRepositoryImpl processRepository;

    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity list(@RequestAttribute(name = "userName") String userName) {
        User user = userRepository.getByUserName(userName);
        List<Sight> sights = sightRepository.getByIdUser(user.getId());
        List<Process> processList = new ArrayList<>();
        for (Sight sight : sights) {
            processList.add(processRepository.getById(sight.getProcessId()));
        }
        return JsonResponse.handleJSONResponseOk("processes", processList);
    }

    @GetMapping("/get/{id}")
    @ResponseBody
    public ResponseEntity list(@PathVariable(value = "id") Long id) {
        Process process = processRepository.getById(id);
        if (process == null) {
            return JsonResponse.handleJSONResponseNotFound("process not found");
        } else {
            return JsonResponse.handleJSONResponseOk("process", process);
        }
    }

    @PostMapping("/save")
    @ResponseBody
    public ResponseEntity save(@RequestBody Process process) {
        process = processRepository.save(process);
        if (process == null) {
            return JsonResponse.handleJSONResponseInternalError("error creating this process");
        } else {
            return JsonResponse.handleJSONResponseOk("process", process);
        }
    }

    @PutMapping("/update")
    @ResponseBody
    public ResponseEntity update(@RequestBody Process process) {
        process = processRepository.save(process);
        if (process == null) {
            return JsonResponse.handleJSONResponseInternalError("error updating this process");
        } else {
            return JsonResponse.handleJSONResponseOk("process", process);
        }
    }

    @DeleteMapping("/delete/{idProcess}")
    @ResponseBody
    public ResponseEntity delete(@PathVariable(name = "idProcess") Long idProcess) {
        if (!processRepository.delete(idProcess)) {
            return JsonResponse.handleJSONResponseInternalError("error deleting this process");
        } else {
            return JsonResponse.handleJSONResponseOk("deleted", true);
        }
    }
}
