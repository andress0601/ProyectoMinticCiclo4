new Vue({
    el: '#app',
    data() {
        return {

            name: "",
            lastNames: "",
            cellPhone: "",
            username: "",
            documento: "",
            documentoC: "",
            placaVeh: "",
            modelo: "",
            color: "",
        }

    },
    methods: {
        guardarCliente() {
            if ((this.name == "") |
                (this.lastNames == "") |
                (this.cellPhone == "") |
                (this.username == "") |
                (this.documento == "") |
                (this.documentoC == "") |
                (this.placaVeh == "") |
                (this.modelo == "") |
                (this.color == "")

            ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Completa Correctamente!',
                    // footer: '<a href="">Why do I have this issue?</a>'
                });



            } else if (this.documento != this.documentoC) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Documentos no coinciden!',
                    // footer: '<a href="">Why do I have this issue?</a>'
                });

            } else {
                //alert("metodo credado");
                const endpoint = "http://localhost:8080/cliente";
                const opciones = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: this.name, lastNames: this.lastNames, cellPhone: this.cellPhone, username: this.username, documento: this.documento, documentoC: this.documentoC, placaVeh: this.placaVeh, modelo: this.modelo, color: this.color })

                };

                fetch(endpoint, opciones).then(async response => {
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
        // validarInformación() {
        //     fetch(endpoint, opciones).then(async response => {

        //     });
        // }
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


});