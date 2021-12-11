

package com.api.Team.servicios;

/**
 *
 * @author pc
 */

    


import com.api.Team.modelos.lugaresModelo;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.api.Team.repositorios.lugaresRepositorio;


@Service
public class lugaresServicio {
    @Autowired
    private lugaresRepositorio repo;//objeto
    private lugaresModelo lugares;
    
    
 
    
    public lugaresModelo guardarLugar(lugaresModelo lugar){
        return repo.save(lugar);
    }
     
    public ArrayList<lugaresModelo> obtenerTodos(){
        
        return (ArrayList<lugaresModelo>) repo.findAll();
        
    }
    
    public boolean borrarLugar(Long id){
        /*
        if(repo.existsById(id)){
            repo.deleteById(id);
            return true;
        }
        else{
            return false;
        }
        */
        return false;
    }
    
    public Optional<lugaresModelo> busquedaLugarId(String id){
        return repo.findById(id);//lo utilizamos para traer toda la información específica
    }
  
}