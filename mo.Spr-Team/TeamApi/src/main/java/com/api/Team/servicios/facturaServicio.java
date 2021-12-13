/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Team.servicios;

import com.api.Team.modelos.facturaModelo;
import com.api.Team.repositorios.facturaRepo;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 *
 * @author admin
 */
@Service
public class facturaServicio {
    @Autowired
    
    private facturaRepo invoice;
    
    public facturaModelo savef(facturaModelo factura){
        return invoice.save(factura);
    }
    
    public ArrayList<facturaModelo> bring(){
        return (ArrayList<facturaModelo>) invoice.findAll();
    }
     public ArrayList<facturaModelo> obtenerfacturaPorName(String name){
       return invoice.findByName(name);
    }
     
     public ArrayList<facturaModelo> obtenerFacturaNit(String nit){
         return invoice.findByNit(nit);
     }
}
