//parte 1: numero de enlaces 

var padres = document.getElementsByClassName ("padre")
console.log ("Hay los siguientes enlaces en la pagina: "+ padres.length)

var enlaces = document.getElementsByTagName("a")
console.log ( "Hay los siguientes enlaces en la pagina: "+enlaces.length)

//parte 2: a que enlace es el penultimo


const penultimate = padres[padres.length - 2].href;
console.log ("El enlace es el siguiente: "+penultimate)

//parte 3

var parrafo3 = document.getElementById("third-paragraph").getElementsByTagName("a")

console.log ("Hay los siguientes enlaces en la parrafo 3: "+ parrafo3.length)


// ########################################################
//AHORA COMO LO HACE LA PROFE

// Opt 2


// 3º
const third = document.querySelector('#number-links');
const numberLinks = third.getElementsByName('a').length;

// Mostrar el primer resultado
const firstResult = document.querySelector('#number-links');
firstResult.innerHTML = `En esta pagin hay ${links.length} enlaces`;

// Crear un nodo para el segundo
const secondResult = document.createElement('p');
const contentSecondResult = document.createTextNode(penultimate);
secondResult.appendChild(contentSecondResult);
document.body.appendChild(secondResult);
const thirdResult = document.querySelector('#third-result')




