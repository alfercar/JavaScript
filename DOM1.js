//Por id
//Name
//Tag name
//clase css

var element1 = document.getElementById('dewey');
console.log('id',element1)


//Los siguientes dos son iguales
var labels = document.getElementsByTagName('label')
console.log('labels', labels)

var labelsCSS = document.getElementsByClassName('label-input');
console.log('labelsCSS', labelsCSS)

var ab = document.getElementsByName ('drone')
console.log('drone', ab)

var element = document.querySelectorAll('#huey'); //En los query selection hay que especificar si es una clase o un identificador
console.log(element)

//opcion1 
var nameFirst = document.getElementById ('nameFirst')
nameFirst.innerHTML = "Hola caracola";

// es igual a lo de antes:
//opcion 2
document.getElementById('nameFirst').innerHTML = 'ciao'



//parentNode
console.log('padre', nameFirst.parentNode);

//borrar nodos: seleccionar al padre e hijo + remove child

let padre = document.getElementById('first-option');
let hijo = document.getElementById('huey');

padre.removeChild(hijo);

