function encriptar ()
{
    var texto = document.getElementById ("textoEncriptado").value.toLowerCase();

    //e= es para que tome letras mayúsculas y minúsculas
    //i= es convertida para "imes"
    //a= es converdida para "ai"
    //o= es converdida para "ober"
    //u= es converdida para "ufat"
    var textoEncriptado= texto.replace (/e/img,"enter");
    textoEncriptado= textoEncriptado.replace (/i/img,"imes");
    textoEncriptado= textoEncriptado.replace (/a/img,"ai");
    textoEncriptado= textoEncriptado.replace (/o/img,"ober");
    textoEncriptado= textoEncriptado.replace (/u/img,"ufat");
    document.getElementById ('textoDesencriptado').value = textoEncriptado;
}

function desencriptar ()
{
    var texto = document.getElementById ("textoDesencriptado").value.toLowerCase ();
    textoDesencriptado= texto.replace (/enter/img,"e");
    textoDesencriptado= textoDesencriptado.replace (/imes/img,"i");
    textoDesencriptado= textoDesencriptado.replace (/ai/img,"a");
    textoDesencriptado= textoDesencriptado.replace (/ober/img,"o");
    textoDesencriptado= textoDesencriptado.replace (/ufat/img,"u");
    document.getElementById ('textoDesencriptado').value = textoDesencriptado;
}

function copiar()
{
    // creamos una variable con el textArea que contiene el texto desencriptado
    var textoDesencriptado = document.getElementById('textoDesencriptado');

    // seleccionamos el text area
    textoDesencriptado.select();

    // escribimos el texto del text area en el portapapeles (clipboard) del navegador
    navigator.clipboard.writeText(textoDesencriptado.value);
}
