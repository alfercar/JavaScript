
//Primero normal
let dias = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683]

let pares = []
let impares = []

let par = dias.filter(function(dia){
    let resto = dia%2
    if (resto==0){
        pares.push(dia)
        return pares
    }
        
    })

let impar = dias.filter(function(dia){
    let resto = dia%2
    if (resto!=0){
        impares.push(dia)
        return impares
    }
})

console.log(pares)
console.log(impares)

//Ahora con la flecha

let numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683]

const PARES = numbers.filter( each => each%2 === 0)

const IMPARES = numbers.filter(each => each%2 !== 0)
console.log(PARES)
console.log(IMPARES)

