package com.process.api.repository;

import com.process.api.model.Sight;

import java.util.List;

public interface SightRepository {

    List<Sight> list();

    Sight getById(Long id);

    List<Sight> getByIdUser(Long id);

    List<Sight> getByIdProcess(Long id);
    
    Sight getByIdProcessAndIdUser(Long idProcess, Long idUser);

    Sight save(Sight sight);

    boolean delete(Long idSight);

}
