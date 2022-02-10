var cajita = document.getElementById('cajita')

cajita.addEventListener('keyup', showKey)

function showKey (event){ //event, evt o e es para el evento y que aparezcna las cosas cuando pase el evento
    console.log("Has clicado la tecla "+ event.code + " y le corresponde el numero "+ event.keyCode)
    
}