
package com.api.Team.modelos;


/**
 *public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    * 
    *  @Id
   
    private Long id;
 * @author admin
 */
public class usuarioModelo {
    
  

    private String cellPhone;
    private String username;
     private String id;//documento
    private String documentoC;
    private String placaVeh;
    private String modelo;
    private String color;

    public String getUsername() {
        return username;
    }

//    public usuarioModelo(String username, int documento) {
//        this.name = "";
//        this.documento= 11;
//   }
    public void setUsername(String username) {
        this.username = username;
    }

//
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    

  

//    public void setUsername(String username) {
//        /*
//        if(!name.equals(" ")){
//            this.name = name;
//        }else{
//            this.name = "Null";
//        }
//        */
//        this.username = username;
//    }

    

    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

 

    public String getDocumentoC() {
        return documentoC;
    }

    public void setDocumentoC(String documentoC) {
        this.documentoC = documentoC;
    }
    
    

    public String getPlacaVeh() {
        return placaVeh;
    }

    public void setPlacaVeh(String placaVeh) {
        this.placaVeh = placaVeh;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
   

    

    
    
    
}
