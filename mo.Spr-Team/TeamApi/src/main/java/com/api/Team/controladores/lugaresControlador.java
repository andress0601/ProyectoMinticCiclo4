/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.api.Team.controladores;

/**
 *
 * @author pc
 */

    


import com.api.Team.modelos.lugaresModelo;
import com.api.Team.servicios.lugaresServicio;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@RequestMapping("/lugares")
public class lugaresControlador {
    @Autowired
    private lugaresServicio serv;
   
    
    @PostMapping()//manda
    public lugaresModelo guardarLugar(@RequestBody lugaresModelo cliente){
       return serv.guardarLugar(cliente);
    }
    
    @GetMapping()//trae
    public ArrayList<lugaresModelo> obtenerTodos(){
        return serv.obtenerTodos();
    }
    
    @DeleteMapping(path = "/{id}")//delete
    
    public boolean borrarLugar(@PathVariable("id") Long id){//decirle que esa variable viene del path através de esa anotación
        return serv.borrarLugar(id);
    }
    
    @GetMapping(path = "/{id}")//búsqueda
    
    public Optional<lugaresModelo> busquedaLugarId(@PathVariable("id")String id){
        return serv.busquedaLugarId(id);
    }

}
//    @GetMapping(path="/buscar/{name}")//búsqueda especifíca
//    public ArrayList<usuarioModelo> obtenerporName(@PathVariable("name")String name){
//        return serv.obtenerClientePorName(name);
//    }
//    
    
    