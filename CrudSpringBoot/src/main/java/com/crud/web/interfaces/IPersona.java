package com.crud.web.interfaces;

import com.crud.web.modelo.Persona;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersona  extends CrudRepository<Persona, Integer>{
    
}
