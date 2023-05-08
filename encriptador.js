let ingresarTexto = document.querySelector(".ingresarTexto");
let escribirTexto = document.querySelector(".mensaje-encriptado");
let imagenEspera=document.querySelector(".imagenEspera");
let alertaEspera1=document.querySelector(".alerta1");
let alertaEspera2=document.querySelector(".alerta2");
let botonCopiar=document.querySelector(".areaBoton3");
let codigos = {
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"
}
let codigosInversos = {
    "ai" : "a",
    "enter" : "e",
    "imes" : "i",
    "ober" : "o",
    "ufat" : "u"
}

//inicializando ocultos boton y textarea del encriptador
botonCopiar.style.display="none";
escribirTexto.style.display="none";

function encriptar(){
    let almacenTexto=ingresarTexto.value;
    almacenTexto = almacenTexto.replaceAll("e",codigos.e);
    almacenTexto = almacenTexto.replaceAll("i",codigos.i);
    almacenTexto = almacenTexto.replaceAll("a",codigos.a);
    almacenTexto = almacenTexto.replaceAll("o",codigos.o);
    almacenTexto = almacenTexto.replaceAll("u",codigos.u);
    escribirTexto.value=almacenTexto;
    ventanaActiva();
}

function desencriptar(){
    let almacenTexto=ingresarTexto.value;
    almacenTexto = almacenTexto.replaceAll("enter",codigosInversos.enter);
    almacenTexto = almacenTexto.replaceAll("imes",codigosInversos.imes);
    almacenTexto = almacenTexto.replaceAll("ai",codigosInversos.ai);
    almacenTexto = almacenTexto.replaceAll("ober",codigosInversos.ober);
    almacenTexto = almacenTexto.replaceAll("ufat",codigosInversos.ufat);
    escribirTexto.value=almacenTexto;
    ventanaActiva();
}

function copiarTexto(){
    navigator.clipboard.writeText(escribirTexto.value);

    ventanaEsperando();
}

function ventanaActiva(){
    imagenEspera.style.display="none";
    alertaEspera1.style.display="none";
    alertaEspera2.style.display="none";
    botonCopiar.style.display="flex";
    escribirTexto.style.display="block";

    console.log("hola amigo ya activaste la ventana");
}
function ventanaEsperando(){
    imagenEspera.style.display="block";
    alertaEspera1.style.display="block";
    alertaEspera2.style.display="block";
    botonCopiar.style.display="none";
    escribirTexto.style.display="none";

    ingresarTexto.value="";
    escribirTexto.value="";
    console.log("Estoy en espera");
}
