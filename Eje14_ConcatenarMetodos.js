//Ejercciio ejemplo

const nombres = ['alfonso','pati','bruja']
const longNombres = nombres
    .filter (nombre => nombre.length < 6)
    .map (nombre => nombre.toUpperCase());
console.log(longNombres)


//Ejercicio clase
const topics = ["JavaScript", "Variables", "funciones", "condicionales","bucles"];

let ejercicio8 = topics.map(function(topic){
    return topic.toUpperCase()
})

console.log(ejercicio8.reverse())
const last = topics.map(function(temita){
    return temita.toUpperCase()
}).reverse(); //=last.reverse
console.log(last)


//Ejercicio pdf

const meses = ["enero", "febrero", "marzo", "abril","mayo","junio", "julio", "agosto", "septiembre","octubre","noviembre","diciembre"];

const meses7 = meses
    .filter(mes => mes.length>7)
    .map(mes => mes.toUpperCase());


console.log(meses7)
console.log("Hay un total de "+meses7.length+" meses con esos valores")
