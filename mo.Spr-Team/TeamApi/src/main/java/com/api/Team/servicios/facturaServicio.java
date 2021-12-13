

package com.api.Team.servicios;

/**
 *
 * @author pc
 */

import com.api.Team.modelos.facturaModelo;
import com.api.Team.repositorios.facturaRepo;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class facturaServicio {
    @Autowired
    private facturaRepo repo;//objeto
    private facturaModelo factura;
    
    
 
    
    public facturaModelo guardarFactura(facturaModelo factura){
        return repo.save(factura);
    }
     
    public ArrayList<facturaModelo> obtenerTodos(){
        
        return (ArrayList<facturaModelo>) repo.findAll();
        
    }
    
    public boolean borrarFactura(Long id){
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
    
    public Optional<facturaModelo> busquedaFacturaId(String nit){
        return repo.findById(nit);//lo utilizamos para traer toda la información específica
    }
}
  
