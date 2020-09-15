package com.process.api.repository;

import com.process.api.model.Sight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class SightRepositoryImpl implements SightRepository {

    @Autowired
    private EntityManager manager;

    @Override
    public List<Sight> list() {
        return manager.createQuery("from Sight", Sight.class)
                .getResultList();
    }

    @Override
    public Sight getById(Long id) {
        return manager.find(Sight.class, id);
    }

    @Override
    public List<Sight> getByIdUser(Long idUser) {
        return manager.createQuery("from Sight where userId = :idUser", Sight.class)
                .setParameter("idUser", idUser)
                .getResultList();
    }

    @Override
    public List<Sight> getByIdProcess(Long idProcess) {
        return manager.createQuery("from Sight where processId = :idProcess", Sight.class)
                .setParameter("idProcess", idProcess)
                .getResultList();
    }

    @Override
    public Sight getByIdProcessAndIdUser(Long idProcess, Long idUser) {
        return manager.createQuery("from Sight where processId = :idProcess and userId = :idUser", Sight.class)
                .setParameter("idProcess", idProcess)
                .setParameter("idUser", idUser)
                .getSingleResult();
    }

    @Override
    @Transactional
    public Sight save(Sight sight) {
        return manager.merge(sight);
    }

    @Override
    @Transactional
    public boolean delete(Long idSight) {
        boolean ret = false;
        Sight sight = getById(idSight);
        if (sight != null) {
            manager.remove(sight);
            ret = getById(sight.getId()) == null;
        }
        return ret;
    }
}
