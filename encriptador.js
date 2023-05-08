let ingresarTexto = document.querySelector(".ingresarTexto");
let escribirTexto = document.querySelector(".mensaje-encriptado");
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
almacenTexto

function encriptar(){
    let almacenTexto=ingresarTexto.value;
    almacenTexto = almacenTexto.replaceAll("e",codigos.e);
    almacenTexto = almacenTexto.replaceAll("i",codigos.i);
    almacenTexto = almacenTexto.replaceAll("a",codigos.a);
    almacenTexto = almacenTexto.replaceAll("o",codigos.o);
    almacenTexto = almacenTexto.replaceAll("u",codigos.u);
    escribirTexto.value=almacenTexto;
}

function desencriptar(){
    let almacenTexto=ingresarTexto.value;
    almacenTexto = almacenTexto.replaceAll("enter",codigosInversos.enter);
    almacenTexto = almacenTexto.replaceAll("imes",codigosInversos.imes);
    almacenTexto = almacenTexto.replaceAll("ai",codigosInversos.ai);
    almacenTexto = almacenTexto.replaceAll("ober",codigosInversos.ober);
    almacenTexto = almacenTexto.replaceAll("ufat",codigosInversos.ufat);
    escribirTexto.value=almacenTexto;
}
