new Vue({
    el:'#app',
    data(){
        return{
            id:"",
            nombre:"",
            apellido:"",
            telefono:"",
            correo:"",
            respuesta:{},
        }
    },
    methods:{
        guardarCliente(){
            //alert("metodo credado");
            const endpoint="http://localhost:8080/cliente";
            const opciones={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({id:this.id, nombre:this.nombre, apellido:this.apellido, telefono:this.telefono, correo:this.correo})

            };

            fetch(endpoint, opciones).then(async response=>{
                //this.respuesta= await Response.json();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cliente guardado',
                    showConfirmButton: false,
                    timer: 2500
                  })
            });
        }
    }
    /*
    data(){
        return{
            titulo:"Segunda app con vue",
            valor:0,
            estado:true,
            lista:["octavio","manuel","jorge","Mariana"],
            clientes:[
                {cedula:"123456",nombre:"Manuel",apellido:"solano",telefono:"1456",correo:"manuel@gmail.com"},
                {cedula:"18391293",nombre:"mario",apellido:"alvarez",telefono:"2716",correo:"macar@gmail.com"},
                {cedula:"01238123",nombre:"alejandro",apellido:"rojas",telefono:"98226",correo:"alejo@gmail.com"},
                {cedula:"1239210",nombre:"sebastian",apellido:"cardenas",telefono:"02356",correo:"sebas@gmail.com"}
            ]
        }
    },
    methods:{
        ocultarT(){
          this.estado=!this.estado; //estado de negación-muestra dos respuestas a la vez         
        }
    }
    */
    
})