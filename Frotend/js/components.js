// ......TARIFAS.........................//

Vue.component('tarifa', {
    data() {
        return {

        }
    },
    template: `<div>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/icono.png"
        type="image">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>Home</title>

    <style>
        /*         
        
         *{
                  margin: 0;  
                  padding: 0;
                }

        main{
            grid-template-columns: 1fr 1fr ;
            grid-template-rows: 1fr 5fr;
                    border: 2rem solid black;
                   
                    background-color: rgb(230, 189, 8);
                    width: 80%;
                    
                    margin: 128px auto;
                    padding: 128px;


                }

        main h1{
            grid-template-columns: 1fr 1fr ;
            grid-template-rows: 1fr 1fr;
            text-decoration: black;
            text-align:top;
            font-size: 5rem;
           
            display: inline;
        }         */
    </style>

</head>

<body class=" bg-fixed bg-cover bg-center bg-no-repeat h-768 w-full  lg:p-8"
    style="background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/parqueadero2.jpg)">

    <header>


    </header>

    <div class="container mx-auto">
        <div class="flex justify-center px-40 my-12 py-10 ">

            <div class="w-full xl:w-3/4 lg:w-10/12 flex">

                <!--min-h-screen flex flex-col justify-center sm:py-2-->
                <div class="px-7 py-3 bg-red-600">

                    <div class="px-5 py-7 bg-yellow-400">
                        <h1 style="font-size: 40pt;" class="text-white text-center  md:mb-4 bg-gray-900 hover:bg-gray-500">TARIFAS PARQUEADERO</h1>

                        <div class="mb-4 md:flex md:justify-between">
                            <div class="mb-4 md:mr-3 md:mb-0">
                                <label
                                    class=" w-full  px-20 py-2 pt-4  inline-block mb-2 text-center text-sm font-bold text-black hover:bg-gray-500"
                                    for="firstName">
                                    VEHÍCULO
                                </label>
                            </div>
                            
                            <div class="md:ml-2 mr-4 mb-0">
                                <label
                                    class=" w-full  px-24 py-2 pt-4  inline-block mb-2  text-sm font-bold text-black hover:bg-gray-500"
                                    for="firstName">
                                    HORA 
                                </label>

                            </div>
                        </div>

                        <div class="mb-4 md:flex md:justify-between">
                            <div class="mb-4 md:mr-0 md:mb-0">
                                <label
                                    class=" w-full bg-white px-16 py-6  block mb-2  text-sm font-bold text-gray-700 hover:bg-blue-500 focus:outline-none focus:shadow-outline"
                                    for="firstName">
                                    Automoviles
                                </label>

                                <label
                                    class=" w-full block  mb-2 text-sm bg-gray-900 px-12 py-6 font-bold text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline"
                                    for="firstName">
                                    Camionetas

                                </label>
                                
                                <label
                                    class=" w-full block  mb-2 text-sm bg-white px-12 py-6 font-bold text-gray-700 hover:bg-blue-500 focus:outline-none focus:shadow-outline"
                                    for="firstName">
                                    Busetas

                                </label>
                                <label
                                    class=" w-full block  mb-2 text-sm bg-gray-900 px-12 py-6 font-bold text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline"
                                    for="firstName">
                                    Camperos

                                </label>

                                <label
                                    class=" w-full block  mb-2 text-sm bg-white px-12 py-6 font-bold text-black hover:bg-blue-500 focus:outline-none focus:shadow-outline"
                                    for="firstName">
                                    Motos

                                </label>
                                <label
                                    class=" w-full block  mb-2 text-sm bg-gray-900 px-12 py-6 font-bold text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline"
                                    for="firstName">
                                    Bicicletas

                                </label>
                            </div>
                
                                
                
                                
        

                            
                            <div class="md:ml-0 mb-8 mr-3 mb-0">
                                <label
                                    class="w-full block  mb-2 text-sm bg-white px-24 py-6 font-bold text-gray-700 hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                    $ 2700
                                </label>
                               
                                <label
                                    class="w-full block mb-2 text-sm bg-gray-900 px-24 py-6 font-bold text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                    $ 2800
                                </label>
                                
                                <label
                                    class="w-full block  mb-2 text-sm bg-white px-24 py-6 font-bold text-black hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                    $ 3000
                                </label>
                                
                                <label
                                    class="w-full block  mb-2 text-sm bg-gray-900 px-24 py-6 font-bold text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                    $ 3200
                                </label>
                                
                                
                                <label
                                    class="w-full block mb-2 text-sm bg-white px-24 py-6 font-bold text-black hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                    $ 1300
                                </label>
                              
                                <label
                                    class="w-full block  mb-2 text-sm bg-gray-900 px-24 py-6 font-bold text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                    $ 700
                                </label>
                                
                                
                            </div>
                            
                        </div>
                        <div class="mb-6 ml-3 mr-16 md:flex md:justify-between">
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <button
                                    class="w-full inline rounded-full mb-2 text-sm bg-gray-900 px-40 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                    QUIERO PARQUEAR 
                                </button>
                               
                            </div>
                        </div>




                    </div>


                </div>
            </div>
        </div>


    </div>
    `,
    methods: {

    }

})

// .......... FACTURA..............//

Vue.component('factura', {
    data() {
        return {

        }
    },
    template: `<div>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/icono.png"
        type="image">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>Factura</title>
</head>

<body>
    
        <div class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8" style="
      background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/parqueadero2.jpg);
    ">
            <div class="container mx-auto">
                <div class="min-h-screen flex flex-col justify-center sm:py-4">
                    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                        <div class="px-8 py-12 bg-white w-full">
                            <div class="mb-4 md:mr-2 md:mb-0">
                                <h1>------------------------------------------</h1>
                                <p class="italic focus:underline font-bold
              transition
              duration-200
              mx-5
              px-5
              py-4
              cursor-pointer
              font-normal
              text-sm
              rounded-lg
              text-black
              hover:bg-blue-300
              focus:outline-none
              focus:bg-gray-200
              focus:ring-2
              focus:ring-gray-400
              focus:ring-opacity-50
              ring-inset
              inline-block
              ml-1">
                                    PARQUEADERO EL SABOR DE NUESTRA TIERRA
                                </p>
                                <br />
                                <label class="block mb-0 text-sm text-left text-gray-700">
                                    <div class="flex space-x-9 italic">
                                        <div>FECHA: </div>
                                        <div>HORA: </div>
                                    </div>
                                </label>
                            </div>
                            <label class="block mb-0 text-sm text-left text-gray-700">
                                <div class="flex space-x-4">
                                    <div class="font-semibold">NIT CLIENTE:</div>
                                    <div></div>
                                </div>
                            </label>
                            <label class="block mb-0 text-sm text-left text-gray-700">
                                <div class="font-semibold">NOMBRE CLIENTE:</div>
                            </label>
                            <label class="block mb-0 text-sm text-left text-gray-700">
                                <div>
                                    <p></p>
                                </div>
                            </label>
                            <label class="block mb-0 text-sm text-left text-gray-700">
                                <div class="flex space-x-2">
                                    <div class="font-semibold">IT.CC:</div>
                                    <div></div>
                                </div>
                            </label>

                            <label class="block mb-6 text-sm text-left text-gray-700">
                                <div class="flex space-x-2">
                                    <div class="font-semibold">TEL CEL:</div>
                                    <div></div>
                                </div>
                            </label>
                            <label class="block mb-0 text-sm text-left text-gray-700" for="firstName">
                                <h1>------------------------------------------</h1>
                                <div>
                                    <p class="font-bold mb-3 font-size: 20pt"> SERVICIOS </p>
                                </div>
                            </label>

                            <label class="block mb-0 text-sm text-left text-gray-700">
                                <div class="font-semibold">PARQUEADERO:</div>
                            </label>

                            <label class="block mb-0 text-sm text-left text-gray-700">
                                <div class="font-semibold">PLACA :</div>
                            </label>

                            <label class="block mb-0 text-sm text-left text-gray-700">
                                <div class="font-semibold">MODELO :</div>
                            </label>

                            <label class="block mb-0 text-sm text-left text-gray-700">
                                <div class="font-semibold">COLOR :</div>
                            </label>
                            <label class="block mb-6 text-sm text-left text-gray-700">
                                <div>
                                    <p></p>
                                </div>
                            </label>

                            <h1>------------------------------------------</h1>

                            <!-- <label class="block mb-2 text-sm text-left text-gray-700">
              <div>}</div>
            </label> -->
                            <label class="block mb-0 text-sm text-left text-gray-700" for="firstName">
                                <div class="flex space-x-3">
                                    <div class="font-semibold">MEDIO DE PAGO:</div>
                                    <div></div>
                                </div>
                            </label>

                            <label class="block mb-0 text-sm text-left text-gray-700" for="firstName">
                                <div class="flex space-x-3">
                                    <div class="font-semibold">CATEGORÍA:</div>
                                    <div></div>
                                </div>
                            </label>

                            <label class="block mb-0 text-sm text-left text-gray-700" for="firstName">
                                <div class="flex space-x-3">
                                    <div class="font-semibold">HORA ENTRADA:</div>
                                    <div></div>
                                </div>
                            </label>

                            <label class="block mb-0 text-sm text-left text-gray-700" for="firstName">
                                <div class="flex space-x-3">
                                    <div class="font-semibold">HORA SALIDA:</div>
                                    <div></div>
                                </div>
                            </label>
                            <label class="block mb-2 text-sm text-left text-gray-700" for="firstName">
                                <h1>------------------------------------------</h1>
                            </label>

                            <label class="block mb-2 text-sm text-left text-gray-700" for="firstName">
                                <div style="font-size: 14pt;" class="flex space-x-3">
                                    <div class="font-bold">TOTAL A PAGAR :</div>
                                </div>
                                <div style="font-size: 14pt;" class="font semibold">$</div>
                            </label>

                            <label class="block mb-6 text-sm text-left text-gray-700" for="firstName">
                                <h1>------------------------------------------</h1>
                            </label>

                            <label class="block mb-4 text-sm text-left text-gray-700 italic">
                                <h1 style="font-size: 14pt;" class="font-semibold italic">
                                    HA SIDO UN GUSTO ATENDERTE ¡GRACIAS!
                                </h1>
                            </label>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    
</body>
    </div>
    `,
    methods: {

    }
})

// ............LUGARES..............//

Vue.component('lugares', {
    data() {
        return {
            espacios: 120,
        }
    },
    template: `
    <div> 
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/icono.png"
        type="image">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>Lugares</title>

    
</head>
<style>


    .wrapper {
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
    }

    .car {
        background-color: powderblue;
        transition: background-color .5s;
    }

    .car:hover{
        background-color: gold;
    }

</style>
<body>

    <!-- carrito -->

    <div id="app" class="wrapper">
        <div v-for= "car in espacios" class="car">
          One
          <svg
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns:ns1="http://sozi.baierouge.fr"
        id="svg171"
        viewBox="0 0 358.85 789.36"
        sodipodi:version="0.32"
        version="1.0"
        inkscape:version="0.48.2 r9819"
        sodipodi:docname="glibersat_Pigeau.svg"
      >
      <defs
          id="defs173"
        >
        <linearGradient
            id="linearGradient239"
          >
          <stop
              id="stop240"
              style="stop-color:#f8ce00"
              offset="0"
          />
          <stop
              id="stop241"
              style="stop-color:#b79700"
              offset="1"
          />
        </linearGradient
        >
        <radialGradient
            id="radialGradient3189"
            xlink:href="#linearGradient239"
            gradientUnits="userSpaceOnUse"
            cy="819.9"
            cx="378.79"
            gradientTransform="matrix(1.1693 0 0 .93776 -273.1 -147.55)"
            r="115.39"
            inkscape:collect="always"
        />
        <radialGradient
            id="radialGradient3193"
            xlink:href="#linearGradient239"
            gradientUnits="userSpaceOnUse"
            cy="598.63"
            cx="294.43"
            gradientTransform="matrix(1.5041 0 0 .74199 -264.04 -146.71)"
            r="91.234"
            inkscape:collect="always"
        />
        <radialGradient
            id="radialGradient3197"
            xlink:href="#linearGradient239"
            gradientUnits="userSpaceOnUse"
            cy="153.65"
            cx="897.24"
            gradientTransform="matrix(-.39086 0 0 3.6334 703.38 -167.47)"
            r="15.849"
            inkscape:collect="always"
        />
        <radialGradient
            id="radialGradient3200"
            xlink:href="#linearGradient239"
            gradientUnits="userSpaceOnUse"
            cy="153.65"
            cx="897.24"
            gradientTransform="matrix(.39086 0 0 3.6334 -343 -162.47)"
            r="15.849"
            inkscape:collect="always"
        />
        <radialGradient
            id="radialGradient3205"
            xlink:href="#linearGradient239"
            gradientUnits="userSpaceOnUse"
            cy="319.37"
            cx="657.76"
            gradientTransform="matrix(.65803 0 0 1.5197 -252.14 -111.82)"
            r="1269.3"
            inkscape:collect="always"
        />
      </defs
      >
      <sodipodi:namedview
          id="base"
          inkscape:window-x="2531"
          inkscape:window-y="54"
          inkscape:window-maximized="0"
          inkscape:zoom="0.71838386"
          inkscape:current-layer="svg171"
          inkscape:cx="190.00436"
          inkscape:cy="342.1668"
          inkscape:window-width="1052"
          showgrid="false"
          inkscape:window-height="1008"
      />
      <rect
          id="rect959"
          style="fill-rule:evenodd;stroke-width:1pt;fill:#60585a"
          rx="8.5849"
          ry="8.5849"
          height="78.696"
          width="27.775"
          y="623.04"
          x="16.287"
      />
      <rect
          id="rect958"
          style="fill-rule:evenodd;stroke-width:1pt;fill:#60585a"
          rx="8.5849"
          ry="8.5849"
          height="78.696"
          width="27.775"
          y="613.04"
          x="311.29"
      />
      <g
          id="g786"
          style="fill:#4a00ad"
          transform="matrix(-1 0 0 -1 282.65 766.12)"
        >
        <path
            id="path787"
            d="m76.616 699.19c-5.4727-0.321-11.137-0.388-16.567 0.34-3.5734 0.712-11.473 3.767-7.655 8.677 5.2454 5.042 14.531 4.269 21.161 3.703l0.5137 5.994c-9.1289 0.75-20.165 0.992-26.841-6.329-5.9809-9.521 3.3763-16.399 12.025-18.017 5.7819-0.733 11.564-0.349 17.362-0.688v6.32z"
            style="fill:#4a00ad"
            inkscape:connector-curvature="0"
        />
        <path
            id="path788"
            d="m76.616 699.19c-5.4727-0.321-11.137-0.388-16.567 0.34-3.5734 0.712-11.473 3.767-7.655 8.677 5.2454 5.042 14.531 4.269 21.161 3.703l0.5137 5.994c-9.1289 0.75-20.165 0.992-26.841-6.329-5.9809-9.521 3.3763-16.399 12.025-18.017 5.7819-0.733 11.564-0.349 17.362-0.688v6.32z"
            style="fill:#4a00ad"
            transform="matrix(1 0 0 -1 0 1430)"
            inkscape:connector-curvature="0"
        />
        <path
            id="path789"
            d="m97.472 715.31c-1.4986-0.143-3.0393-0.081-4.5417-0.089-1.2715-0.004-5.5397-0.655-6.3316 0.724-0.2793 0.983 0.196 2.108 1.022 2.657 2.002 1.029 4.7046 0.505 6.8526 0.402 2.6281-0.126 6.1922-0.416 6.9952 2.782 0.249 2.611-1.378 5.115-3.4074 6.63-2.6849 1.651-5.7413 1.346-8.7364 0.969-1.7834-0.237-3.5619-0.51-5.3498-0.711l0.3288-2.76c1.7937 0.214 3.576 0.511 5.3666 0.748 2.19 0.268 4.7033 0.675 6.7086-0.491 1.154-0.815 2.2671-2.318 2.2757-3.791 0.0105-1.097-3.415-0.664-4.039-0.633-2.8978 0.155-6.0482 0.623-8.678-0.876-2.1183-1.588-3.0545-4.623-1.4109-6.885 2.1458-2.038 5.6768-1.512 8.4036-1.521 1.5024-0.007 3.0431 0.055 4.5417-0.088v2.933z"
            style="fill:#4a00ad"
            transform="matrix(1.3776 0 0 1.3776 -36.308 -268.33)"
            inkscape:connector-curvature="0"
        />
        <g
            id="g790"
            style="fill:#4a00ad"
            transform="matrix(1.166 0 0 1.0624 -26.21 -45.238)"
          >
          <path
              id="path791"
              d="m109.26 713.84c2.054 0.228 4.181 0.138 6.242 0.15 3.888 0.015 7.776-0.017 11.665-0.034 0.779-0.005 1.559-0.011 2.338-0.036v3.227c-0.779-0.026-1.559-0.032-2.338-0.037-3.889-0.017-7.777-0.049-11.665-0.034-2.061 0.012-4.188-0.078-6.242 0.15v-3.386z"
              style="fill:#4a00ad"
              inkscape:connector-curvature="0"
          />
          <path
              id="path792"
              d="m119.37 715.87c-0.159 1.242-0.079 2.551-0.087 3.798-0.011 2.488-0.012 4.976 0.006 7.465 0.012 1.648 0.028 3.296 0.032 4.944 0.001 0.986-0.002 1.973-0.004 2.959h-3.321c-0.002-0.986-0.005-1.973-0.003-2.959 0.003-1.648 0.019-3.296 0.031-4.944 0.018-2.489 0.018-4.977 0.007-7.465-0.009-1.247 0.072-2.556-0.088-3.798h3.427z"
              style="fill:#4a00ad"
              transform="translate(1.3446 .33612)"
              inkscape:connector-curvature="0"
          />
        </g
        >
        <g
            id="g793"
            style="fill:#4a00ad"
          >
          <path
              id="path794"
              d="m129.46 713.86c-0.219 1.706-0.114 3.502-0.134 5.217-0.046 4.31-0.051 8.621-0.008 12.932 0.017 1.411 0.038 2.823 0.066 4.234h-3.275c0.027-1.411 0.049-2.823 0.066-4.234 0.043-4.311 0.037-8.622-0.008-12.932-0.021-1.715 0.085-3.511-0.134-5.217h3.427z"
              style="fill:#4a00ad"
              inkscape:connector-curvature="0"
          />
          <path
              id="path795"
              d="m127.41 712.83c1.41 0.156 2.863 0.074 4.28 0.113 3.027 0.138 5.689 1.021 6.086 4.411 0.091 3.395-1.772 5.431-5.069 6.06-1.547 0.195-3.059 0.136-4.605-0.029l0.353-3.167c1.221 0.137 2.422 0.2 3.645 0.051 1.605-0.296 2.418-0.88 2.405-2.576-0.124-1.535-1.597-1.488-2.895-1.55-1.383-0.028-2.821-0.081-4.2 0.073v-3.386z"
              style="fill:#4a00ad"
              inkscape:connector-curvature="0"
          />
          <path
              id="path796"
              d="m128.76 721.9c1.223 0.136 2.492 0.072 3.72 0.082 2.638 0.021 5.597-0.184 7.788 1.535 1.853 1.96 1.215 4.372 0.521 6.696-0.472 1.573-0.874 3.118-0.925 4.767-0.003 0.322 0 0.641 0.008 0.962l-3.305 0.084c-0.01-0.383-0.013-0.765-0.009-1.148 0.062-1.931 0.526-3.743 1.082-5.583 0.252-0.844 0.953-2.406 0.486-3.29-1.116-1.268-4.173-0.813-5.646-0.801-1.228 0.01-2.497-0.054-3.72 0.082v-3.386z"
              style="fill:#4a00ad"
              inkscape:connector-curvature="0"
          />
          <rect
              id="rect797"
              style="fill-rule:evenodd;stroke-width:1pt;fill:#4a00ad"
              height="3.0254"
              width="2.3531"
              y="712.84"
              x="126.06"
          />
        </g
        >
        <path
            id="path798"
            style="fill-rule:evenodd;stroke-width:1pt;fill:#4a00ad"
            inkscape:connector-curvature="0"
            d="m165.39 724.77c0 6.958-5.196 12.606-11.598 12.606s-11.597-5.648-11.597-12.606c0-6.959 5.195-12.606 11.597-12.606s11.598 5.647 11.598 12.606zm-3.698-0.322c0 4.739-3.54 8.586-7.9 8.586-4.361 0-7.9-3.847-7.9-8.586 0-4.741 3.539-8.587 7.9-8.587 4.36 0 7.9 3.846 7.9 8.587z"
        />
      </g
      >
      <rect
          id="rect317"
          style="fill-rule:evenodd;stroke-width:1pt;fill:#60585a"
          rx="8.5849"
          ry="8.5849"
          height="78.696"
          width="27.775"
          y="98.038"
          x="318.79"
      />
      <rect
          id="rect316"
          style="fill-rule:evenodd;stroke-width:1pt;fill:#60585a"
          rx="8.5849"
          ry="8.5849"
          height="78.696"
          width="27.775"
          y="101.12"
          x="8.6333"
      />
      <path
          id="path184"
          style="fill-rule:evenodd;stroke:#000000;stroke-width:1pt;fill:url(#radialGradient3205)"
          sodipodi:nodetypes="ccccccccccc"
          inkscape:connector-curvature="0"
          d="m178.73 782.98c-113.07 2.362-130.4-17.92-147.11-21.261-16.705-38.776-19.877-365.73-9.855-392.46 7.493-60.54-4.936-70.565-8.687-143.53-7.14-85.213 9.815-37.829-4.439-124.48 21.658-90.216-19.136-92.053 168.52-100.63 172.21 2.401 147.96 10.415 169.61 100.63-14.254 86.652 2.701 39.268-4.439 124.48-3.751 72.961-16.18 82.986-8.687 143.53 10.022 26.727 6.85 353.68-9.855 392.46-26.153 15.153-95.459 21.261-145.07 21.261z"
      />
      <path
          id="path272"
          style="fill-rule:evenodd;fill:url(#radialGradient3200)"
          inkscape:connector-curvature="0"
          d="m41.537 281.88s21.534 82.442 21.534 82.442 0 154.58-3.0758 157.15c-3.0771 2.5759-27.686 46.372-27.686 46.372s6.1517-280.81 9.2288-285.97z"
      />
      <path
          id="path274"
          style="fill-rule:evenodd;fill:url(#radialGradient3197)"
          inkscape:connector-curvature="0"
          d="m318.84 276.88s-21.534 82.442-21.534 82.442 0 154.58 3.0758 157.15c3.0771 2.5759 27.686 46.372 27.686 46.372s-6.1517-280.81-9.2288-285.97z"
      />
      <path
          id="path230"
          style="stroke-opacity:.45912;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;fill:#f7ce00"
          sodipodi:nodetypes="cccccc"
          inkscape:connector-curvature="0"
          d="m37.198 44.521c-11.667 18.667-10.816 196.22 7.851 210.22 18.03-14.851 122.48-28.646 142.34-27.364 20.288-1.492 99.694 8.055 124.09 22.697 6.577 2.13 19.727-205.55 1.059-219.55-58.34-16.344-252.01-16.344-275.34 13.99z"
      />
      <path
          id="path275"
          style="fill-rule:evenodd;fill:url(#radialGradient3193)"
          sodipodi:nodetypes="cscccc"
          inkscape:connector-curvature="0"
          d="m41.764 257.39s65.53-26.897 138.64-27.585c65.833-0.64088 95.565 9.623 135.61 25.019-4.8534 48.756-9.7078 94.943-21.843 110.34-111.64-28.23-118.92-28.23-230.56 0-2.43-15.39-24.273-105.21-21.846-107.77z"
      />
      <path
          id="path185"
          style="fill-rule:evenodd;fill-opacity:.70440;stroke:#000000;stroke-width:1pt;fill:#000000"
          sodipodi:nodetypes="cscccc"
          inkscape:connector-curvature="0"
          d="m45.51 260.2s63.783-24.762 134.95-25.395c64.078-0.59 93.017 8.859 132 23.033-4.724 44.885-9.449 87.405-21.261 101.58-108.67-25.986-115.75-25.985-224.42 0.001-2.362-14.174-23.623-96.856-21.261-99.218z"
      />
      <path
          id="path270"
          style="fill-rule:evenodd;fill:url(#radialGradient3189)"
          sodipodi:nodetypes="cccccc"
          inkscape:connector-curvature="0"
          d="m75.697 531.43c-12.369 59.368-22.263 173.16-22.263 173.16 19.79 17.316 121.21 24.737 123.69 24.737 7.4212 0 108.84-7.4212 126.16-32.158 0-14.842-9.8956-121.21-19.79-168.21-86.579 12.368-202.84 7.4212-207.79 2.4734z"
      />
      <path
          id="path188"
          style="fill-rule:evenodd;fill-opacity:.78616;stroke:#000000;stroke-width:1pt;fill:#000000"
          sodipodi:nodetypes="cccccc"
          inkscape:connector-curvature="0"
          d="m80.945 536.59c-11.812 56.695-21.261 165.36-21.261 165.36 18.899 16.536 115.75 23.623 118.12 23.623 7.087 0 103.94-7.087 120.48-30.71 0-14.174-9.45-115.75-18.899-160.64-82.681 11.811-193.71 7.087-198.44 2.362z"
      />
      <path
          id="path189"
          style="stroke-opacity:.55346;fill-rule:evenodd;stroke:#000000;stroke-width:1.25;fill:#f7ce00"
          inkscape:connector-curvature="0"
          d="m321.9 279.09l28.348 2.362s14.174 14.174 4.725 21.261c-9.45 7.087-33.073-2.362-33.073-2.362v-21.261z"
      />
      <path
          id="path190"
          style="stroke-opacity:.54717;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;fill:#f7ce00"
          inkscape:connector-curvature="0"
          d="m36.946 283.82l-28.348 2.362s-14.174 14.174-4.725 21.261c9.45 7.087 33.073-2.362 33.073-2.362v-21.261z"
      />
      <path
          id="path304"
          style="stroke-opacity:.25157;fill-rule:evenodd;fill-opacity:.56604;stroke:#000000;stroke-width:1.082pt;fill:#2e87cf"
          sodipodi:nodetypes="ccccc"
          inkscape:connector-curvature="0"
          d="m52.582 17.025c-9.023 1.573-19.32 18.998-14.584 21.902 11.281-5.689 33.327-13.506 54.984-15.684 4.286-2.3 10.138-9.356 10.358-10.929-14.886-0.847-40.915 2.775-50.758 4.711z"
      />
      <path
          id="path306"
          style="stroke-opacity:.25157;fill-rule:evenodd;fill-opacity:.56604;stroke:#000000;stroke-width:1.082pt;fill:#2e87cf"
          sodipodi:nodetypes="ccccc"
          inkscape:connector-curvature="0"
          d="m298.7 12.115c9.0231 1.5731 19.32 14.633 14.584 17.537-11.28-5.6886-33.327-7.5051-54.984-9.6837-4.2855-2.2999-10.134-10.992-10.36-12.565 14.888-0.84719 40.917 2.7754 50.76 4.7115z"
      />
      <path
          id="path307"
          style="stroke-opacity:.37107;stroke:#000000;stroke-width:1pt;fill:none"
          sodipodi:nodetypes="cc"
          inkscape:connector-curvature="0"
          d="m112.29 10.38c37.098-6.547 99.837-6.002 126.57-2.729"
      />
      <path
          id="path308"
          style="stroke-opacity:.37107;stroke:#000000;stroke-width:1pt;fill:none"
          sodipodi:nodetypes="cc"
          inkscape:connector-curvature="0"
          d="m112.29 13.108c37.098-6.547 99.837-6.002 126.57-2.729"
      />
      <path
          id="path309"
          style="stroke-opacity:.37107;stroke:#000000;stroke-width:1pt;fill:none"
          sodipodi:nodetypes="cc"
          inkscape:connector-curvature="0"
          d="m112.29 16.381c37.098-6.547 99.837-6.002 126.57-2.729"
      />
      <path
          id="path310"
          style="stroke-opacity:.37107;stroke:#000000;stroke-width:1pt;fill:none"
          sodipodi:nodetypes="cc"
          inkscape:connector-curvature="0"
          d="m112.29 20.2c37.098-6.001 98.2-4.911 124.39-3.275"
      />
      <path
          id="path186"
          style="fill-rule:evenodd;fill-opacity:.68554;stroke:#000000;stroke-width:1pt;fill:#000000"
          inkscape:connector-curvature="0"
          d="m43.148 295.63s16.536 75.595 16.536 75.595 0 141.74-2.362 144.1c-2.363 2.362-21.261 42.521-21.261 42.521s4.724-257.49 7.087-262.22z"
      />
      <path
          id="path211"
          sodipodi:nodetypes="cccc"
          style="stroke:#000000;stroke-width:1pt;fill:none"
          inkscape:connector-curvature="0"
          d="m36.35 310.53c-2.333 25.667-14.991 443.45 4.666 443.34 69.856 26.467 221.62 23.584 278.52-7.0003 17.53-0.0711 6.999-417.68 4.666-443.34"
      />
      <path
          id="path187"
          style="fill-rule:evenodd;fill-opacity:.74843;stroke:#000000;stroke-width:1pt;fill:#000000"
          inkscape:connector-curvature="0"
          d="m317.18 290.91s-16.536 75.595-16.536 75.595 0 141.74 2.362 144.1c2.363 2.362 21.261 42.521 21.261 42.521s-4.724-257.49-7.087-262.22z"
      />
      <metadata
        >
        <rdf:RDF
          >
          <cc:Work
            >
            <dc:format
              >image/svg+xml</dc:format
            >
            <dc:type
                rdf:resource="http://purl.org/dc/dcmitype/StillImage"
            />
            <cc:license
                rdf:resource="http://creativecommons.org/licenses/publicdomain/"
            />
            <dc:publisher
              >
              <cc:Agent
                  rdf:about="http://openclipart.org/"
                >
                <dc:title
                  >Openclipart</dc:title
                >
              </cc:Agent
              >
            </dc:publisher
            >
            <dc:title
              >top view car</dc:title
            >
            <dc:date
              >2012-11-14T02:03:21</dc:date
            >
            <dc:description
              >Top view of a car</dc:description
            >
            <dc:source
              >https://openclipart.org/detail/173138/top-view-xar-by-jonadem-173138</dc:source
            >
            <dc:creator
              >
              <cc:Agent
                >
                <dc:title
                  >jonadem</dc:title
                >
              </cc:Agent
              >
            </dc:creator
            >
            <dc:subject
              >
              <rdf:Bag
                >
                <rdf:li
                  >car</rdf:li
                >
                <rdf:li
                  >top view</rdf:li
                >
                <rdf:li
                  >transport</rdf:li
                >
                <rdf:li
                  >vehicle</rdf:li
                >
              </rdf:Bag
              >
            </dc:subject
            >
          </cc:Work
          >
          <cc:License
              rdf:about="http://creativecommons.org/licenses/publicdomain/"
            >
            <cc:permits
                rdf:resource="http://creativecommons.org/ns#Reproduction"
            />
            <cc:permits
                rdf:resource="http://creativecommons.org/ns#Distribution"
            />
            <cc:permits
                rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
            />
          </cc:License
          >
        </rdf:RDF
        >
      </metadata
      >
        </svg>
        </div>
    </div>
    
</body>
    
    </div>


    `,
    methods: {

    }
})

// ..........LOGIN................//

Vue.component('login',{
    data(){
        return{
            id:"",
            documento:"",
            prueba:[],
        }
    },

    template: `
    <div>
    
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/icono.png"
    type="image">
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<title>Login</title>
</head>
<!-- component -->

<body class=" bg-fixed bg-cover bg-center bg-no-repeat h-768 w-full  lg:p-8"
style="background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/parqueadero2.jpg)">
<!-- Container -->
<div id="app">

    <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <!-- Col -->
                <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-7/12 bg-cover rounded-l-lg"
                    style="background-image: url(' https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/mejorada3.jpg')">
                </div>
                <!--Mejorada 1 https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/mejorada1.jpg
                Mejorada 2 https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/mejorada2.jpg
                Mejorada 3 https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/mejorada3.jpg
            -->
                <!-- Col -->

                <div class="w-full lg:w-8/12 bg-white p-5 rounded-lg lg:rounded-l-none">

                    <h3 class="pt-4 mb-3 text-2xl text-center">INGRESA!</h3>
                    <form class="px-8 pt-6 pb-8 mb-4 bg-blue-400 border border-gray-900 rounded">

                        <div class="mb-4">
                            <label class="block mb-2 text-sm  " for="email">
                                Username
                            </label>
                            <input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                v-model="id" type="text" placeholder="Username" />
                        </div>

                        <div class="mb-4 md:mr-2 md:mb-0">
                            <label class="block mb-2 text-sm  " for="password">
                                Document
                            </label>
                            <input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                type="password" v-model="documento" placeholder="********" />
                            <!-- <p class="text-xs italic text-red-500">Please write your document.</p> -->
                        </div>


                        <div class="mb-4 text-center">
                            <button @click.prevent="validarI()"
                                class="border-2 border-gray-900  transition duration-200 mx-5 px-10 py-4 cursor-pointer font-normal text-sm rounded-lg text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset  inline-block ml-1"
                                type="button">
                                LOGIN
                            </button>
                        </div>
                        <hr class="mb-6 border-t" />

                        <!-- <div class="text-center">
                        <a
                            class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                            href="./index.html"
                        >
                            Already have an account? Login!
                        </a>
                    </div> -->
                        <div class="text-center">
                            <h3
                                class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset inline-block ml-1">
                                No tienes cuenta? Registrate!</h3>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
    </div>
    `,
    methods:{
        validarI() {

            var endpoint = 'http://localhost:8080/cliente/' + this.id;
            var opciones = { method: 'GET' };


            fetch(endpoint, opciones).then(async response => {
                if ((this.id == "") |
                    (this.documento == "")) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡llena todos los campos!',

                    });

                }

                else if (this.id != this.id) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡No se idenfica ese id!',
                    });

                } else if (this.documento != this.documento) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡documento no encontrado!',
                    });
                } else {
                    this.prueba = await response.json();


                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Bienvenid@ !!` + this.id,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            });
        }

    }
})

//...........REGISTRO...........//

Vue.component('registro',{
    data(){
        return{
            id:"",
            cellPhone:"",
            documento:"",
            documentoC:"",
            placaVeh:"",
            modelo:"",
            color:"",

        }
    },
    template: `
            <div>
            
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/icono.png"
            type="image">
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <title>Sign up</title>
        </head>
        <!-- component -->

        <body class=" bg-fixed bg-cover bg-center bg-no-repeat h-768 w-full  lg:p-8"
        style="background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/parqueadero2.jpg)">
        <!-- Container -->
        <div id="app">
            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">
                    <!-- Row -->
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                        <!-- Col -->
                        <!-- <div class="w-full h-auto bg-gray-400 hidden lg:inline lg:w-5/12 bg-cover rounded-l-lg"
                            style="background-image: url('https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/6.jpg')"> -->
                        </div> -->
                        <!--Mejorada 1 https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/mejorada1.jpg
                        Mejorada 2 https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/mejorada2.jpg
                        Mejorada 3 https://el-sabor-de-nuestra-tierra.000webhostapp.com/Images-Parqueadero/mejorada3.jpg
                    -->
                        <!-- Col -->

                        <div class="w-full lg:w-8/12 bg-transparent p-5 rounded-lg lg:rounded-l-none">

                            <h3 class="pt-4 mb-3 text-2xl text-center">Registrate!</h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-transparent border-8 border-green-500 rounded">

                                <div class="mb-2 md:flex md:justify-between">
                                    <div class="mb-2">
                                        <label class="block mb-2 text-sm text-white" for="username">
                                            Username
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="text" v-model="id" placeholder="Username" />
                                    </div>
                                    <div class="mb-2">
                                        <label class="block mb-2 text-sm text-white  " for="cellPhone">
                                            Cell Phone
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="text" v-model="cellPhone" placeholder="Cell Phone" />
                                    </div>
                                
                                </div>
                                

                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-2  md:mb-0">
                                        <label class="block mb-2 text-sm text-white" for="documento">
                                            Documento
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="password" placeholder="********" v-model="documento" />
                                        <!-- <p class="text-xs italic text-red-500">Please write your document.</p> -->
                                    </div>
                                    <div class="md:ml-2 mb-4">
                                        <label class="block mb-2 text-sm text-white" for="documentoC">
                                            Confirm Document
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="password" placeholder="********" v-model="documentoC" >
                                    </div>
                                </div>

                                <h1 class="text-white mb-4">INFORMACIÓN ESTACIONAMIENTO</h1>
                                <div class="mb-4 ">
                                    <label class="block mb-2 text-sm text-white  " for="Placa">
                                        Placa Vehículo
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Placa Vehículo" v-model="placaVeh" />
                                </div>
                                <div class="mb-4 ">
                                    <label class="block mb-2 text-sm text-white  " for="Modelo">
                                        Modelo
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Modelo" v-model="modelo" />
                                </div>
                                <div class="mb-4 ">
                                    <label class="block mb-2 text-sm text-white  ">
                                        Color
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Color" v-model="color" />
                                </div>
                                <div class="mb-4 text-center">
                                    <button @click.prevent=" guardarCliente()"
                                        class="border-2 border-green-500  transition duration-200 mx-5 px-10 py-4 cursor-pointer font-normal text-sm rounded-lg text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset  inline-block ml-1"
                                    >Sign Up</button>
                                </div>
                                <hr class="mb-6 border-t" />

                                <!-- <div class="text-center">
                                <a
                                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="./index.html"
                                >
                                    Already have an account? Login!
                                </a>
                            </div> -->
                                <div class="text-center">
                                    <label
                                        class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset inline-block ml-1"
                                        href="#" to="/register">
                                        Ya tienes cuenta? Ingresa!</label>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    </div>
    `,
    methods:{
        guardarCliente() {
            if ((this.id == "") |
                (this.cellPhone == "") |
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
                    body: JSON.stringify({ id: this.id, cellPhone: this.cellPhone, documento: this.documento, documentoC: this.documentoC, placaVeh: this.placaVeh, modelo: this.modelo, color: this.color })

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
        },
       
    }

})
new Vue({
    el: '#componentes',
    data() {
        return {
            menu: 0,
        }
    }
})