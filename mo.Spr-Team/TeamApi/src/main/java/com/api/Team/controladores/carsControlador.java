/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Team.controladores;

import com.api.Team.modelos.carsModelo;
import com.api.Team.servicios.carsServicio;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author admin
 */
@Service
@RestController
@RequestMapping("/cars")
public class carsControlador {
   @Autowired 
   
   private carsServicio service;
   
   @PostMapping()
   
   public carsModelo saveC(@RequestBody carsModelo vehicle){
       return service.saveC(vehicle);
   }
   
   @GetMapping()
   
   public ArrayList<carsModelo> bringAll(){
       return service.bringAll();
   }
}
