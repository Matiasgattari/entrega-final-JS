// Array vacio para ir cargando las compras al carrito
let carrito = [];

let listaProductos = [];
// clase constructora productos
class Productos {
    constructor(codigo, nombre, precio, stock,unidadesPedidas) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = stock;
        this.unidadesPedidas = unidadesPedidas;
        };
    
    };



const carritoContenedor = document.getElementById("carrito");


// Saludo e info al abrir pagina de carrito

Swal.fire({
    title: '<strong>¿Cómo comprar?</strong>',
    icon: 'info',
    html: 'De nuestra lista de variedades, haga click en donde dice <b>"seleccione cantidad"</b> para desplegar un menú con opciones.   ' +
        'Seleccione de la lista la cantidad que desea ordenar.   ' +
        'Puede agregar el mismo producto las veces que desee.   ' +
        'En "ver carrito" podra ver las unidades pedidas.  Gracias por su compra :) ',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entiendo!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
})







console.log(`console log CARRITOOOOOOOOOO 1`, carrito);






let carritoTraido = JSON.parse(localStorage.getItem('carritoStorage'));
console.log(`carrito traido`, carritoTraido);

let rubia = 0;
let negra = 0;
let roja = 0;
let honey = 0;
let ipa = 0;
let pale = 0;

// while (carritoTraido !== 0 && carritoTraido !== null) 


function recuperoUnidades () {
    
        console.log(`lalalalala`)
        rubia = carrito[0].unidadesPedidas;
        console.log(`cerveza rubia`, rubia);
        negra = carrito[1].unidadesPedidas;
        console.log(`cerveza negra`, negra);
        roja = carrito[2].unidadesPedidas;
        console.log(`cerveza roja`, roja);
        honey = carrito[3].unidadesPedidas;
        console.log(`cerveza honey`, honey);
        ipa = carrito[4].unidadesPedidas;
        console.log(`cerveza ipa`, ipa);
        pale = carrito[5].unidadesPedidas;
        console.log(`cerveza pale`, pale);
         
};




    console.log(`asd rubiaaaaaaaaaaaaaaaaaaaaaaa`, rubia);
// Trayendo del localStorage el carrito guardado
 
let carritoLocalStorage = JSON.parse(localStorage.getItem("carritoStorage"));

console.log("console log carrito local storage")
console.log(`carritoLocalStorageeeeeeeeeeeeeee`,carritoLocalStorage)

if (carritoLocalStorage !== 0 && carritoLocalStorage !== null ) {
   carrito = [...carritoLocalStorage];
   recuperoUnidades();

carrito.forEach((elm) => {
    console.log(`console log del elm XXXXXXXXXXXXXXXXXXX`,elm)
})
   
} else {carrito=[];}


// Renderizado de productos de la pagina a partir de json y fetch
const cargar = async  ()=>{

    fetch("./data.json")
    .then(response  => response.json() )
    .then(data => {
        // console.log(data);

        data.forEach((producto) =>{
              listaProductos.push(new Productos(producto.codigo, producto.nombre, producto.precio, producto.cantidad, producto.unidadesPedidas))
             })
             const contenedor = document.getElementById("contenedor")

             for (const producto of listaProductos) {
                console.log(`pre pre rubiaaaaaaaaaaaaaaaaaaaaaaa`, rubia);
                 let carritoCompras = document.createElement("div");
                //  console.log("log de carrito compras",carritoCompras)
                 carritoCompras.innerHTML = `
                 <div class="card m-5 ${producto.nombre} margenTarjetas ">
                     <div class="card-body contenedorTarjetas align-items-center justify-content-center d-flex flex-column">
                          <h3 class="card-title m-2 nombreTarjeta nombre">Cerveza ${producto.nombre}</h3>
                          <p class="card-text m-2 nombreTarjeta precio">Precio unidad $${producto.precio}</p>
                          <p class="card-text m-2 nombreTarjeta codigo">Código producto: ${producto.codigo}</p>
                          
                          <form id="idFormulario${producto.codigo}" class="align-items-center justify-content-center d-flex flex-column">
                            <input id="idInput${producto.codigo}" type="number" placeholder="Seleccione cantidad" class="m-2" required list="listaOpciones">
                            <button type="submit" class="btn btn-primary mt-5 botonCarrito estiloBoton border-light" id="boton${producto.codigo}"> Agregar al carrito</button>
                          </form>
             
                     </div>
                 </div>
                 
                 <datalist id="listaOpciones">
                 <option value="6">
                 <option value="12">
                 <option value="24">
                 </datalist>
                 `;
                 contenedor.append(carritoCompras);
                 const botonCarrito = document.getElementById(`boton${producto.codigo}`);
                
             
                 //  sacarle default al form
                 const form = document.getElementById(`idFormulario${producto.codigo}`);
                 form.addEventListener("click", (e) => {
                     e.preventDefault()
                 })
             
             
                 // agregando sweet alert al boton de agregar al carrito
                 botonCarrito.addEventListener("click", () => {
                     Swal.fire({
                         position: 'center',
                         icon: 'success',
                         title: 'Producto cargado correctamente',
                         showConfirmButton: false,
                         timer: 1500
                     })
                 });
             
                 // Leyendo cantidad de latas pedidas y transportando esa cantidad al array para generar el pedido y el precio final
                 const idInput = document.getElementById(`idInput${producto.codigo}`);
             
                 botonCarrito.addEventListener("click", () => leerCantidad(idInput))
             
                 function leerCantidad() {
                    console.log(`carritoLocalStorageeeeeeeeeeeeeee`,carritoLocalStorage)
                    // asd++;
                    console.log(`pre rubiaaaaaaaaaaaaaaaaaaaaaaa`, rubia);
                    //  console.log(idInput.value);
                     let cantidadPedida = idInput.value;
                     console.log("cantidad pedida", cantidadPedida);
             
                    if (carritoLocalStorage !==0 && carritoLocalStorage !== null) {
                        listaProductos=[...carritoLocalStorage]
                    } else {

                    }
                    carrito = [...listaProductos];
                    
                     if (botonCarrito === boton1 ) { 
                        
                        listaProductos[0].unidadesPedidas =parseInt(cantidadPedida) + parseInt(listaProductos[0].unidadesPedidas);
                        console.log(`cantidades de 1 pedidassssssssssssssssssssssssssss`,cantidadPedida);
                        console.log(`rubiaaaaaaaaaaaaaaaaaaaaaaa`, rubia);
                        
                        } else
                    if (botonCarrito === boton2 ) { 
                        
                        listaProductos[1].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[1].unidadesPedidas);
                        console.log(`cantidades de 2 pedidassssssssssssssssssssssssssss`,cantidadPedida);
                        
                        } else      
                    if (botonCarrito === boton3 ) { 
                        
                        listaProductos[2].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[2].unidadesPedidas);
                        
                        } else

                    if (botonCarrito === boton4 ) { 
                        
                        listaProductos[3].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[3].unidadesPedidas);
                        
                        } else
                    if (botonCarrito === boton5 ) { 
                        
                        listaProductos[4].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[4].unidadesPedidas);
                        
                        } else
                    if (botonCarrito === boton6 ) { 
                        
                        listaProductos[5].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[5].unidadesPedidas);
                        
                        } else {
                        carrito.push(listaProductos[0]);
                        carrito.push(listaProductos[1]);
                        carrito.push(listaProductos[2]);
                        carrito.push(listaProductos[3]);
                        carrito.push(listaProductos[4]);
                        carrito.push(listaProductos[5]);
                     }
                     
             // agrego clase para ocultar el carrito cada vez que cargo producto nuevo para que se recargue al apretar "ver carrito"
                     carritoContenedor.classList.add("ocultar");
                 }
             
             };
    })
    // console.log("productosResponse response.json", productosResponse);

};

cargar ();



// Funcion de calculo del precio final del carrito de compras
function renderizadoPrecio() {
    const carritoContenedor = document.getElementById("carrito");

    // Calculo de cada parte que compone el precio final unidad * precio unitario
    
    let resultado1 = parseInt(carrito[0].unidadesPedidas) * parseInt(listaProductos[0].precio);
    let resultado2 = parseInt(carrito[1].unidadesPedidas) * parseInt(listaProductos[1].precio);
    let resultado3 = parseInt(carrito[2].unidadesPedidas) * parseInt(listaProductos[2].precio);
    let resultado4 = parseInt(carrito[3].unidadesPedidas) * parseInt(listaProductos[3].precio);
    let resultado5 = parseInt(carrito[4].unidadesPedidas) * parseInt(listaProductos[4].precio);
    let resultado6 = parseInt(carrito[5].unidadesPedidas) * parseInt(listaProductos[5].precio);

    let resultadoFinal = resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6;

    // Mensaje mostrando monto final de la compra
    const precioFinal = document.getElementById("precioFinal")
    precioFinal.innerHTML = ``;
    let precioParrafo = document.createElement(`div`)
    precioParrafo.classList.add(`divCarritoLista`);
    precioParrafo.innerHTML = `<h2>El total de su compra es $ ${resultadoFinal} .</h2>
    `;
    carritoContenedor.append(precioParrafo);

}



// Funcion para "ver carrito de compras" 
function verCarrito() {
    
  // Renderizado de los productos en el carrito de compras
    
    carritoContenedor.classList.remove("ocultar");
    carritoContenedor.innerHTML = ``;

    for (const elementos of carrito) {

        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.classList.add(`divCarritoLista`);
        contenidoCarrito.innerHTML = `
        <div id="" class="d-flex flex-row flex-wrap borrarDiv">
            <h3 class="m-3">Cerveza: ${elementos.nombre}</h3>
            <h4 class="m-3">Precio por unidad: $ ${elementos.precio} </h4>
            <h4 class="m-3">Codigo: ${elementos.codigo}</h4>
            <h4 class="m-3">Unidades: ${elementos.unidadesPedidas}</h4>
            <button id="eliminarElemento${elementos.codigo}" class="eliminarElementoCarrito"> X </button>
        </div>
        `;
        carritoContenedor.append(contenidoCarrito);

              
        // Funcion para eliminar 1 elemento del carrito
            
            let eliminarElemento = document.getElementById(`eliminarElemento${elementos.codigo}`);
            // console.log(`console log ELIMINAR ELEMENTOOOOOOOOOOOOOOO`, eliminarElemento.id);
           
            eliminarElemento.addEventListener("click", ()=> { 
                
                if (eliminarElemento.id === "eliminarElemento1") {
                    listaProductos[0].unidadesPedidas=0;
                    carrito[0].unidadesPedidas=0;
                    carritoContenedor.classList.add("ocultar");
                    verCarrito();
                }
                if (eliminarElemento.id === "eliminarElemento2") {
                    listaProductos[1].unidadesPedidas=0;
                    carrito[1].unidadesPedidas=0;
                    carritoContenedor.classList.add("ocultar");
                    verCarrito();
                }
                if (eliminarElemento.id === "eliminarElemento3") {
                    listaProductos[2].unidadesPedidas=0;
                    carrito[2].unidadesPedidas=0;
                    carritoContenedor.classList.add("ocultar");
                    verCarrito();
                }
                if (eliminarElemento.id === "eliminarElemento4") {
                    listaProductos[3].unidadesPedidas=0;
                    carrito[3].unidadesPedidas=0;
                    carritoContenedor.classList.add("ocultar");
                    verCarrito();
                }
                if (eliminarElemento.id === "eliminarElemento5") {
                    listaProductos[4].unidadesPedidas=0;
                    carrito[4].unidadesPedidas=0;
                    carritoContenedor.classList.add("ocultar");
                    verCarrito();
                }
                if (eliminarElemento.id === "eliminarElemento6") {
                    listaProductos[5].unidadesPedidas=0;
                    carrito[5].unidadesPedidas=0;
                    carritoContenedor.classList.add("ocultar");
                    verCarrito();
                }
    
            })
        
    };


    localStorage.setItem("carritoStorage", JSON.stringify(carrito));

    // Llamo funcion de precio final del carrito


    if (carrito !== 0 && carrito !== null) {renderizadoPrecio();} else {};
    

    // creo el boton para cerrar el carrito
    let botonCerrarCarrito = document.createElement(`div`);
    botonCerrarCarrito.innerHTML = `<button id="cerrarCarritoCompras" class="estiloBoton">Cerrar carrito</button>`;
    carritoContenedor.append(botonCerrarCarrito);

    // Funcionalidad boton cerrar carrito

    let botonCerrarCarritoFuncion = document.getElementById(`cerrarCarritoCompras`);
    botonCerrarCarritoFuncion.addEventListener(`click`, ()=> {
        carritoContenedor.classList.add("ocultar");
    })

    
    // creo el boton para eliminar el carrito y doy funcionalidad para vaciar
    let botonEliminarCarrito = document.createElement(`button`);
    botonEliminarCarrito.classList.add("estiloBoton");
    botonEliminarCarrito.innerHTML = "Eliminar";
    carritoContenedor.append(botonEliminarCarrito);
    botonEliminarCarrito.addEventListener("click", () => {
        
        
        // carrito.length=0;
        
        carritoContenedor.classList.add("ocultar");

       
        listaProductos[0].unidadesPedidas=0;
        
        listaProductos[1].unidadesPedidas=0;
        
        listaProductos[2].unidadesPedidas=0;
        
        listaProductos[3].unidadesPedidas=0;
        
        listaProductos[4].unidadesPedidas=0;
        
        listaProductos[5].unidadesPedidas=0;
        if (carritoLocalStorage!== 0 && carritoLocalStorage !== null) {

            localStorage.setItem("carritoStorage",JSON.stringify(listaProductos))
        } else {
            console.log(`no hago nada`);
        }
          
})

    
};

const verCarritoFinal = document.getElementById("verCarritoFinal");

verCarritoFinal.addEventListener("click", verCarrito);




