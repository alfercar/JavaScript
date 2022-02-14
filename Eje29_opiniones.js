var input = document.getElementById("input");
var boton = document.getElementById("boton");
var escondido = document.getElementById("escondido");
var respuesta = document.getElementById("respuesta");

boton.addEventListener ('click', opinion)
input.addEventListener ('keyup', opinion2)


function opinion(){
    escondido2.style.visibility = 'visible'
    escondido.style.visibility = 'visible'
    respuesta.innerHTML = input.value;
    alert("lA RESPUESTA HA SIDO GUARDADA")
}

function opinion2(event){
    if (event.keyCode == 13){
        escondido2.style.visibility = 'visible'
        escondido.style.visibility = 'visible'
        respuesta.innerHTML = input.value;
        alert("lA RESPUESTA HA SIDO GUARDADA")
    }
    
}



