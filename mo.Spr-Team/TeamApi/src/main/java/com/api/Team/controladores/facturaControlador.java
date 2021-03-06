/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Team.controladores;

import com.api.Team.modelos.facturaModelo;
import com.api.Team.servicios.facturaServicio;
import java.util.ArrayList;
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

/**
 *
 * @author admin
 */
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
   

    @GetMapping(path = "/extraer/{nit}")//búsqueda
    public ArrayList<facturaModelo> obtenerFacturaId(@PathVariable("nit")String nit){
     return servi.obtenerFacturaNit(nit);
    }
    
 
  @GetMapping(path="/buscar/{name}")
    public ArrayList<facturaModelo> obtenerfacturaPorName(@PathVariable("name")String name){
       return servi.obtenerfacturaPorName(name);
    }
  
    
  
}
