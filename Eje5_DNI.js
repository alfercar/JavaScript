let numero = prompt ('introduce tu numero de dni')
console.log('DNI', numero)

let resto = numero%23
console.log(resto)

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if(numero<0 || numero>999999999){
    alert("No vale hermano")
}

else {
    console.log(letras[resto]);
}

//console.log('Tu letra del dni es: '+ + ', a que si chaval')

