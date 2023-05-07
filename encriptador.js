let ingresar = document.querySelector(".ingresarTexto");
let escribir = document.querySelector(".mensaje-encriptado");
let codigos = {
    "a" : "ai",
    "e" : "",
    "i" : "",
    "o" : "",
    "u" : ""
}


function mostrar(){
    const letra = codigos.a;
    //escribir.value=ingresar.value;
    escribir.value=ingresar.value.replaceAll("a",letra);
    console.log(escribir.value);
}

function encriptar(textoIngresado){

    return prueba;
}