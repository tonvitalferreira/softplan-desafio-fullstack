package com.process.api.repository;

import com.process.api.model.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {

    @PersistenceContext
    private EntityManager manager;

    @Override
    public List<User> list() {
        return manager.createQuery("from User", User.class)
                .getResultList();
    }

    @Override
    public User get(Long id) {
        return manager.find(User.class, id);
    }

    @Override
    public User getByUserNameAndPassword(String userName, String passwordHash) {
        User ret = null;
        try {
            ret = manager.createQuery("from User where user_name = :userName and password_hash = :passwordHash", User.class)
                    .setParameter("userName", userName)
                    .setParameter("passwordHash", passwordHash).getSingleResult();
        } catch (NoResultException nre) {
            ret = null;
        }
        return ret;
    }

    @Override
    public User getByUserName(String userName) {
        User ret = null;
        try {
            ret = manager.createQuery("from User where user_name = :userName", User.class)
                    .setParameter("userName", userName)
                    .getSingleResult();
        } catch (NoResultException nre) {
            ret = null;
        }
        return ret;
    }

    @Override
    @Transactional
    public User save(User user) {
        return manager.merge(user);
    }

    @Override
    @Transactional
    public boolean delete(Long idUser) {
        boolean ret = false;
        User user = get(idUser);
        if (user != null) {
            manager.remove(user);
            ret = get(user.getId()) == null;
        }
        return ret;
    }

    @Override
    @Transactional
    public User updateAuthToken(Long idUser, String authToken) {
        User user = get(idUser);

        user.setAuthToken(authToken);
        return manager.merge(user);
    }


}
