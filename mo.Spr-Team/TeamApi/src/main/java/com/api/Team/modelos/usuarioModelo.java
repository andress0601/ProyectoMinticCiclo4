
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
    
   private String id;
    private String name;
    private String lastNames;
    private String cellPhone;
    private String username;
    private int documento;
    private int documentoC;
    private String placaVeh;
    private String modelo;
    private String color;
    public String error;
/*
    public usuarioModelo(String name, String lastNames, String cellPhone, String username, int documento, int documentoC, String placaVeh, String modelo, String color, String error) {
        this.name = "Juan";
        this.lastNames = "Pedraza";
        this.cellPhone = "5555555";
        this.username = "JuPe55";
        this.documento = 123456789;
        this.documentoC = 123456789;
        this.placaVeh = "abc123";
        this.modelo = "2101";
        this.color = "blanco";
        this.error = "Que error jajajaj";
    }
  */ 

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    

    public String getName() {
        return name;
    }

    public void setName(String name) {
        /*
        if(!name.equals(" ")){
            this.name = name;
        }else{
            this.name = "Null";
        }
        */
        this.name = name;
    }

    public String getLastNames() {
        return lastNames;
    }

    public void setLastNames(String lastNames) {
        this.lastNames = lastNames;
    }

    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getDocumento() {
        return documento;
    }

    public void setDocumento(int documento) {
        this.documento = documento;
    }

    public int getDocumentoC() {
        return documentoC;
    }

    public void setDocumentoC(int documentoC) {
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
