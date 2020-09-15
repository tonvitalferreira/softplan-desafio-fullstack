package com.process.api.controller;

import com.process.api.controller.dto.AuthRequestDTO;
import com.process.api.model.JsonResponse;
import com.process.api.model.User;
import com.process.api.repository.UserRepositoryImpl;
import com.process.api.service.JWTManagerService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/oauth")
public class AuthController {

    @Autowired
    private UserRepositoryImpl userRepository;

    @Autowired
    private JWTManagerService jwtManager;

    @PostMapping("/authenticate")
    @ResponseBody
    public ResponseEntity authenticate(@RequestBody @Valid AuthRequestDTO authRequest) {
        User user = userRepository.getByUserNameAndPassword(authRequest.getUserName(), authRequest.getPasswordHash());
        if (user == null) {
            return JsonResponse.handleJSONResponseNotFound("user not found");
        }

        boolean isNewToken = false;
        String authToken = user.getAuthToken();

        if (authToken == null) {
            authToken = jwtManager.generateAuthToken(authRequest.getUserName(), authRequest.getPasswordHash(), user.getId());
            isNewToken = true;
        } else {
            if (!jwtManager.isValidAuthToken(authToken)) {
                authToken = jwtManager.generateAuthToken(authRequest.getUserName(), authRequest.getPasswordHash(), user.getId());
                isNewToken = true;
            }
        }

        if (isNewToken) {
            user = userRepository.updateAuthToken(user.getId(), authToken);
        }

        return JsonResponse.handleJSONResponseOk("token", user.getAuthToken());
    }

    @PostMapping("/token-validate")
    @ResponseBody
    public ResponseEntity tokenValidate(@RequestBody String payload) {
        JSONObject payloadJSON = new JSONObject(payload);
        String authToken = payloadJSON.getString("authToken");
        return JsonResponse.handleJSONResponseOk("valid", jwtManager.isValidAuthToken(authToken));
    }

}
