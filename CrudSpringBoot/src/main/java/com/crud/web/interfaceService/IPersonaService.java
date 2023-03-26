package com.crud.web.interfaceService;

import com.crud.web.modelo.Persona;
import java.util.List;
import java.util.Optional;

public interface IPersonaService {
    public List <Persona>Listar();
    public Optional<Persona>listarId(int id);
    public int save(Persona p);
    public void delete(int id);
}
