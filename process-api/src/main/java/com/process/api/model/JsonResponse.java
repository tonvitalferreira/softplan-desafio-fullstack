package com.process.api.model;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;

public class JsonResponse {

    public static ResponseEntity handleJSONResponse(HttpStatus status, String responseName, Object responseBody) {
        boolean success = status == HttpStatus.OK;
        HashMap<String, Object> res = new HashMap<>();
        res.put(responseName, responseBody);
        res.put("success", success);
        return ResponseEntity.status(status).body(res);
    }

    public static ResponseEntity handleJSONResponseOk(String responseName, Object responseBody) {
        HashMap<String, Object> res = new HashMap<>();
        res.put(responseName, responseBody);
        res.put("success", true);
        return ResponseEntity.status(HttpStatus.OK).body(res);
    }

    public static ResponseEntity handleJSONResponseNotFound(String errMsg) {
        HashMap<String, Object> res = new HashMap<>();
        res.put("errMsg", errMsg);
        res.put("success", false);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
    }

    public static ResponseEntity handleJSONResponseInternalError(String errMsg) {
        HashMap<String, Object> res = new HashMap<>();
        res.put("errMsg", errMsg);
        res.put("success", true);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
    }
}
