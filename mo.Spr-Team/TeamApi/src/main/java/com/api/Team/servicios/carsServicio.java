/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Team.servicios;

import com.api.Team.modelos.carsModelo;
import com.api.Team.repositorios.carsRepo;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author admin
 */
@Service
public class carsServicio {
    @Autowired
    
    private carsRepo vehicles;
  
public carsModelo saveC(carsModelo vehicle) {   
    return vehicles.save(vehicle);//vehicle objeto
    
}

   public  ArrayList<carsModelo>bringAll(){
       return (ArrayList<carsModelo>) vehicles.findAll();
   }
        

}
