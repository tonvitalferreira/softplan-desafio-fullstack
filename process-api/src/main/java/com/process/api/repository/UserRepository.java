package com.process.api.repository;

import com.process.api.model.User;

import java.util.List;

public interface UserRepository {

    List<User> list();

    User get(Long id);

    User getByUserNameAndPassword(String username, String passwordHash);

    User getByUserName(String username);

    User save(User user);

    User updateAuthToken(Long idUser, String authToken);

    boolean delete(Long idUser);

}
