
package com.api.Team.repositorios;
import com.api.Team.modelos.lugaresModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 *
 * @author pc
 */
@Repository
public interface lugaresRepositorio extends MongoRepository<lugaresModelo, String>{
    
}
