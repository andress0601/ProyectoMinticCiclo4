/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Team.repositorios;
import com.api.Team.modelos.usuarioModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface usuarioRepo extends MongoRepository<usuarioModelo, String>{

    
}
