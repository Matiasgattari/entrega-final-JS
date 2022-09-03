// PARTE DE REGISTRO DE USUARIOS

// sacando el default al formulario de registro
const formularioRegistro = document.getElementById(`formularioRegistro`);
formularioRegistro.addEventListener("click", (e) => {
    e.preventDefault()
});


const formularioLogin = document.getElementById(`formularioLogin`);
formularioLogin.addEventListener("click", (e) => {
    e.preventDefault()
});


// Arreglo vacio usuarios para ir pusheando
let usuarios = [];


// Agregando evento al boton de registrar
const registrar = document.getElementById(`registrar`)

registrar.addEventListener("click", () => {

    let inputNombre = document.getElementById("inputNombre");
    let inputNombreValor = inputNombre.value;

    let inputApellido = document.getElementById(`inputApellido`);
    let inputApellidoValor = inputApellido.value;

    let inputDireccion = document.getElementById(`inputDireccion`);
    let inputDireccionValor = inputDireccion.value;

    let inputContrasenia = document.getElementById("inputContrasenia");
    let inputContraseniaValor = inputContrasenia.value;



    // funcion constructora de usuarios
    class Usuarios {

        constructor(inputNombreValor, inputApellidoValor, inputDireccionValor, inputContraseniaValor) {
            this.nombre = inputNombreValor;
            this.apellido = inputApellidoValor;
            this.direccion = inputDireccionValor;
            this.contrasenia = inputContraseniaValor;
        }
    }
    usuarios.push(new Usuarios(inputNombreValor, inputApellidoValor, inputDireccionValor, inputContraseniaValor))

    console.log(usuarios);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    Swal.fire({
        title: `Usuario registrado con exito`,
        timer: 2000,
        timerProgressBar: true,
        allowOutsideClick: true,
        showConfirmButton: false
    });

});




// PARTE DE LOGIN

// agregando evento al boton de login
const botonLogin = document.getElementById(`botonLogin`);



botonLogin.addEventListener(`click`, () => {

    // trayendo valores del localStorage como array
    let usuariosStorage = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuariosStorage);

    let usuarioLogin = document.getElementById(`usuarioLogin`);
    let usuarioLoginValor = usuarioLogin.value;
    let contraseniaLogin = document.getElementById(`contraseniaLogin`);
    let contraseniaLoginValor = contraseniaLogin.value

    console.log(`log de valor usuario`, usuarioLoginValor);
    console.log(`log de valor contrasenia`, contraseniaLoginValor);

    // validacion de que el nombre de usuario y contrasenia estan en el localStorage, por medio de forEach
    const search = element => element.nombre === usuarioLoginValor;
    console.log(`prueba find usuarioStorage`)
    console.log(usuariosStorage.find(search));
    let usuarioEncontrado = usuariosStorage.find(search);
    console.log(`log de usuarioEncontrado`, usuarioEncontrado);


    // if reemplazado por ternario. validacion usuario y contrasenia
    usuarioEncontrado.contrasenia === contraseniaLoginValor ?
        Swal.fire({
            title: `Sesion iniciada correctamente, bienvenido ${usuarioEncontrado.nombre} !`,
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: true,
            showConfirmButton: false,

        }, setTimeout(function () {
            window.location.href = "../carrito.html"
        }, 2000)) :
        Swal.fire({
            title: `Intente nuevamente, los valores no coinciden`,
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: true,
            showConfirmButton: false
        });


});