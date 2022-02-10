//parte 1

var boton = document.getElementById("boton")

boton.addEventListener("click", showMessage)

function showMessage (){
    alert("Se ha guardado la partida crack")
}

//parte 2

var input1 = document.getElementById("input1")
// var input1 = document.querySelector("#input1")

input1.addEventListener("focus", cambioColor)

function cambioColor(){
    input1.style.backgroundColor = "yellow"
}

input1.addEventListener("focusout", cambioColor2)

function cambioColor2(){
    input1.style.backgroundColor = "white"
}


//parte 3

let input2 = document.getElementById("input2")

let palabrita 

let vocales = [65,69,73,79,85]

//Falta meter lo de add listener crack

input2.addEventListener("keyup",vocalizacion)

function vocalizacion (event){
    
    console.log("Has clicado la tecla "+ event.code + " y le corresponde el numero "+ event.keyCode)

    if (vocales.indexOf(event.keyCode) == -1){ //porque es lo que sale cuando no esta en el array
        input2.style.color = "black"
    }
    else {
        input2.style.color = "red"
    }
}











