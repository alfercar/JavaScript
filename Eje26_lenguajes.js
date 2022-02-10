var botonlenguaje = document.getElementById("boton")

var lista = document.getElementById("lista")

boton.addEventListener("click", creacion)

function creacion (){
    const crearLi = document.createElement ("li")
    const contenido = document.createTextNode ("JavaScript")
    crearLi.appendChild(contenido);
    lista.appendChild(crearLi)
    
}



// Para hacer que apa