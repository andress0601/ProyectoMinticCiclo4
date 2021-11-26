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
    
 
    
    public usuarioModelo guardarC(usuarioModelo cliente){
        return repo.save(cliente);
    }
    
    public ArrayList<usuarioModelo> todos(){
        
        return (ArrayList<usuarioModelo>) repo.findAll();
        
    }
    
    public boolean deleteCliente(Long id){
        if(repo.existsById(id)){
            repo.deleteById(id);
            return true;
        }
        else{
            return false;
        }
        
    }
    
    public Optional<usuarioModelo> busquedaClienteid(Long id){
        return repo.findById(id);//es opcional ya que si no encuentra manda un null
    }
    
    public ArrayList<usuarioModelo> obtenerClientePorName(String name){
        return repo.findByName(name);
    }
    
   
}