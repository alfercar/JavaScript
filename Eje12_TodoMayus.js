
const numbers = [3, 6, 7, 10]

//MAP ejemplo
let numbersPlus = numbers.map(function(numero){
    //  let aux = numero + 1
    //  return aux
    return numero + 1;
});

console.log(numbersPlus);

// ejercicio 8:todo en mayuscula

const topics = ["JavaScript", "Variables", "funciones", "condicionales","bucles"];

let ejercicio8 = topics.map(function(topic){
    return topic.toUpperCase()

})

console.log(ejercicio8.reverse())

// O también: const reversed (ejercicio8.reversed();
// console.log(reversed)


// Tambien se podría hacer de la siguiente manera
// const topics = ["JavaScript", "Variables", "funciones", "condicionales","bucles"];
// let ejercicio8 = topics.map(topic => topic.toUpperCase());
// ejercicio8.reverse();
// console.log(ejercicio8.reverse())


