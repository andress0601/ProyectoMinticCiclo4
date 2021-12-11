new Vue({
    el: '#app',
    data() {
        return {
            espacios: 120,
            name: "",
            medioPago: "",
            hEntrada: "",
            hSalida: "",
            descuento: 0,
            total: 0,
            guardando: [],
        }

    },
    methods: {
        traerDatos() {

            var endpoint = 'http://localhost:8080/toPrint/buscar/' + this.name;
            var opciones = { method: 'GET' };

            if (this.name == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡completa el campo!',

                });

            }
            fetch(endpoint, opciones).then(async response => {
                this.guardando = await response.json();
                console.log(this.guardando);
                if (!this.guardando ) {
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡No hay ningún resultado de tu búsqueda!',
                    });

                   
                    
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Generando tu factura !!` + this.name,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                }
            });

            // if (!this.guardando) {

            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Oops...',
            //         text: '¡No hay ningún resultado de tu búsqueda!',
            //     });


            // } else {
            //     Swal.fire({
            //         position: 'top-end',
            //         icon: 'success',
            //         title: `Generando tu factura !!` + this.name,
            //         showConfirmButton: false,
            //         timer: 1500
            //     });
            // }


        }


    }






});