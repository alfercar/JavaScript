const esri = "esri";
const nombre = "Alfonso"
const mayus = esri.charAt(0).toUpperCase()
const minus = esri.substring(1)
console.log(mayus+minus)

function mayuscula (palabra){
    const porcion = palabra.substring(1)
    return palabra[0].toUpperCase()+porcion
}




const frase = "environmental systems research institute que es donde estudio yo jeje";
const frasecita = frase.split(' ')
console.log(frasecita)

let frasebien = frasecita.map(function(palabra){
    let mays = palabra.charAt(0).toUpperCase()
    let mins = palabra.substring(1)
    let palabrasbien = mays+mins
    return palabrasbien
}).join(" ");

console.log(frasebien)


