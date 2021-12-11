/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Team.controladores;

import com.api.Team.modelos.usuarioModelo;
import com.api.Team.servicios.usuarioServicio;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins= "*",methods = { RequestMethod.GET  ,RequestMethod.POST}) //Para que me encuentre y no se distorcione en buscar a traves de los datos que mando desde vue
@RequestMapping("/cliente")
public class usuarioControlador {
    @Autowired
    private usuarioServicio serv;
   
    
    @PostMapping()//manda
    public usuarioModelo guardarC(@RequestBody usuarioModelo cliente){
       return serv.guardarC(cliente);
    }
    
    @GetMapping()//trae
    public ArrayList<usuarioModelo> todos(){
        return serv.todos();
    }
    
    @DeleteMapping(path = "/{id}")//delete
    
    public boolean deleteCliente(@PathVariable("id") Long id){//decirle que esa variable viene del path através de esa anotación
        return serv.deleteCliente(id);
    }
    
    @GetMapping(path = "/buscar/{id}")//búsqueda
     
    public ArrayList<usuarioModelo> busquedaClienteId(@PathVariable("id")String id){
        return serv.busquedaClienteid(id);
    }
    


    
    
}
