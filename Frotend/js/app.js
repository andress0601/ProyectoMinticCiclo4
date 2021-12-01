new Vue({
    el:'#app',
    data(){
        return{
            espacios:12,
            name:"",
            lastNames:"",
            cellPhone:"",
            username:"",
            documento:"",
            // datosConsulta:{},
            
        }
    },
    methods:{
        guardarCliente(){
            //alert("metodo credado");
            const endpoint="http://localhost:8080/cliente";
            const opciones={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({ name:this.name, lastNames:this.lastNames, cellPhone:this.cellPhone, username:this.username, documento:this.documento})

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
        },
        //solicitud por get
        // consultarCliente(){
        //     endpoint="http://localhost:8080/cliente";
        //     fetch(endpoint).then(async response=>{
        //         // Swal.fire({
        //         //     position: 'top-center',
        //         //     icon: 'success',
        //         //     title: 'Mostrando tus registros',
        //         //     showConfirmButton: true,
        //         //     timer: 1500
        //         //   })
        //         alert("Mostrando tus registros");
        //     this.datosConsulta= await response.json();
               
        //     });
        // },

        
    }
    
    
})