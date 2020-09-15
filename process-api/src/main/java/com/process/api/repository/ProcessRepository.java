package com.process.api.repository;

import com.process.api.model.Process;

import java.util.List;

public interface ProcessRepository {

    List<Process> list();

    Process getById(Long id);

    List<Process> getByIdUser(Long id);

    Process save(Process process);

    boolean delete(Long idProcess);

}
