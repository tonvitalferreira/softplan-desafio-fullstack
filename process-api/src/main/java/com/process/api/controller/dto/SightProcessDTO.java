package com.process.api.controller.dto;

import javax.validation.constraints.NotNull;

public class SightProcessDTO {

    @NotNull
    private Long process_id;

    @NotNull
    private Long user_id;

    @NotNull
    private String text;

    public Long getProcess_id() {
        return process_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public String getText() {
        return text;
    }
}
