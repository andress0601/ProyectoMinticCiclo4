/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Team.servicios;

import com.api.Team.modelos.usuarioModelo;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.api.Team.repositorios.usuarioRepo;


@Service
 
public class usuarioServicio{
    @Autowired
    private usuarioRepo repo;//objeto
    private usuarioModelo people;
    
    
 
    
    public usuarioModelo guardarC(usuarioModelo cliente){
        return repo.save(cliente);
    }
    
    public ArrayList<usuarioModelo> todos(){
        
        return (ArrayList<usuarioModelo>) repo.findAll();
        
    }
    
    public boolean deleteCliente(Long id){
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
    
    public Optional<usuarioModelo> busquedaClienteid(String id){
        return repo.findById(id);//lo utilizamos para traer toda la información específica
    }
    
//   
    
//    public boolean validar(){
//        boolean valid= false;
//        
//        if(("".equals(this.people.getName())) |
//            ("".equals(this.people.getLastNames())) |
//                ("".equals(this.people.getCellPhone())) |
//                ("".equals(this.people.getUsername())) |
//                ("".equals(this.people.getDocumento())) |
//                ("".equals(this.people.getDocumentoC())) |
//                ("".equals(this.people.getPlacaVeh())) |
//                ("".equals(this.people.getModelo())) |
//                ("".equals(this.people.getColor()))
//                
//                ){
//            valid=false;
//            this.people.error = alert("Completa Correctamente");
//        }else if(this.people.getDocumento() != this.people.getDocumentoC()){
//            this.people.error = alert("No coinciden documentos");
//        }else{
//            valid=true;
//        }
//        return valid;
//    }
//
//    private String alert(String completa_Correctamente) {
//        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//    }

  
}