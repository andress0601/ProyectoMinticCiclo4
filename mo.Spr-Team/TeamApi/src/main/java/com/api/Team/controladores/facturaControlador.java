/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Team.controladores;

import com.api.Team.modelos.facturaModelo;

import com.api.Team.servicios.facturaServicio;

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
@RequestMapping("/factura")
public class facturaControlador {
    @Autowired
    private facturaServicio serv;
   
    
    @PostMapping()//manda
    public facturaModelo guardarFactura(@RequestBody facturaModelo factura){
       return serv.guardarFactura(factura);
    }
    
    @GetMapping()//trae
    public ArrayList<facturaModelo> obtenerTodos(){
        return serv.obtenerTodos();
    }
    
    @DeleteMapping(path = "/{id}")//delete
    
    public boolean borrarFactura(@PathVariable("id") Long id){//decirle que esa variable viene del path através de esa anotación
        return serv.borrarFactura(id);
    }
    
    @GetMapping(path = "/{nit}")//búsqueda
    public Optional<facturaModelo> busquedaFacturaId(@PathVariable("nit")String nit){
        return serv.busquedaFacturaId(nit);
    }
    
}



/*
import com.api.Team.modelos.facturaModelo;
import com.api.Team.servicios.facturaServicio;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@Service
@RestController
@CrossOrigin(origins= "*",methods = { RequestMethod.GET  ,RequestMethod.POST})
 @RequestMapping("/toPrint")
public class facturaControlador {
  @Autowired
  
  private facturaServicio servi;
  
  @PostMapping()
  public facturaModelo savef(@RequestBody facturaModelo factura){
      return servi.savef(factura);
  }
  
  @GetMapping()
  public ArrayList<facturaModelo> bring(){
      return servi.bring();
  }
  
  @GetMapping(path="/buscar/{nit}")
    public Optional<facturaModelo> obtenerfacturaPorName(@PathVariable("nit")String nit){
       return servi.busquedaFacturaId(nit);
    }
    
    
  
}
*/