package com.process.api.repository;

import com.process.api.model.Process;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class ProcessRepositoryImpl implements ProcessRepository {

    @Autowired
    private EntityManager manager;

    @Override
    public List<Process> list() {
        return manager.createQuery("from Process", Process.class)
                .getResultList();
    }

    @Override
    public Process getById(Long id) {
        return manager.find(Process.class, id);
    }

    @Override
    public List<Process> getByIdUser(Long idUser) {
        return manager.createQuery("from Process where user_id = :idUser", Process.class)
                .setParameter("idUser", idUser)
                .getResultList();
    }

    @Override
    @Transactional
    public Process save(Process process) {
        return manager.merge(process);
    }

    @Override
    @Transactional
    public boolean delete(Long idProcess) {
        boolean ret = false;
        Process process = getById(idProcess);
        if (process != null) {
            manager.remove(process);
            ret = getById(process.getId()) == null;
        }
        return ret;
    }
}
