new Vue({
    el: '#app',
    data() {
        return {
            espacios: 120,
            id: "",
            cellPhone: "",
            documento: "",
            documentoC: "",
            placaVeh: "",
            modelo: "",
            color: "",
            prueba: []
        }

    },
    methods: {
        // guardarCliente() {
        //     if ((this.id == "") |
        //         (this.cellPhone == "") |
        //         (this.documento == "") |
        //         (this.documentoC == "") |
        //         (this.placaVeh == "") |
        //         (this.modelo == "") |
        //         (this.color == "")

        //     ) {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Oops...',
        //             text: '¡Completa Correctamente!',
        //             // footer: '<a href="">Why do I have this issue?</a>'
        //         });



        //     } else if (this.documento != this.documentoC) {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Oops...',
        //             text: '¡Documentos no coinciden!',
        //             // footer: '<a href="">Why do I have this issue?</a>'
        //         });

        //     } else {
        //         //alert("metodo credado");
        //         const endpoint = "http://localhost:8080/cliente";
        //         const opciones = {
        //             method: 'POST',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify({ id: this.id, cellPhone: this.cellPhone, documento: this.documento, documentoC: this.documentoC, placaVeh: this.placaVeh, modelo: this.modelo, color: this.color })

        //         };

        //         fetch(endpoint, opciones).then(async response => {
        //             //this.respuesta= await Response.json();

        //             Swal.fire({
        //                 position: 'top-end',
        //                 icon: 'success',
        //                 title: 'Cliente guardado',
        //                 showConfirmButton: false,
        //                 timer: 2500
        //             })

        //         });
        //     }
        // },
       








    }
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





});