let numero1 = 5
let numero2 = 8


// numero2 + " es negativo o distinto de cero
if (numero2 < 0 || numero2>=1)
console.log(numero2);

// El incrementar en una unidad en valor de nuemro q no lo hace mayor o igual que numero 2
if(numero1++ <= numero2) {console.log('si')}


//Para pedirle un dato al usuario
let name = prompt('dime tu nombre');
console.log('name', name)