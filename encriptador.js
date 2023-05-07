let ingresar = document.querySelector(".ingresarTexto");
let escribir = document.querySelector(".mensaje-encriptado");

function mostrar(){
    escribir.value=ingresar.value;
    console.log(escribir.value);
}

