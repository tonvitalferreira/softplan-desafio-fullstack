package com.process.api.controller.dto;


import javax.validation.constraints.NotNull;

public class AuthRequestDTO {

    @NotNull
    private String userName;

    @NotNull
    private String passwordHash;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
}
