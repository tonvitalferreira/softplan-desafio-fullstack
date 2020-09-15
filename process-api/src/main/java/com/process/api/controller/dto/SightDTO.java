package com.process.api.controller.dto;

import javax.validation.constraints.NotNull;
import java.util.List;

public class SightDTO {

    @NotNull
    private List<Long> userList;

    public List<Long> getUserList() {
        return userList;
    }
}
