//opcion 1

//let numero = prompt("Escribe un valor para obtener su valor factorial (n!) jeje");

//let factorial = 1;

//console.log('El número seleccionado por el usuario es: ', numero);

//while (numero!=0 ){
    //factorial=factorial*numero; numero--;

//}


//console.log("El valor factorial es: ", factorial);
//alert(`El valor factorial es: ${factorial}`)

//opcion 2

let numero = prompt("Escribe un valor para obtener su valor factorial (n!) jeje");

let factorial = 1;

console.log('El número seleccionado por el usuario es: ', numero);

for (i=1;i<=numero;i++){
    factorial=i*factorial
}
console.log("El valor factorial es: ", factorial)
alert(`El valor factorial es: ${factorial}`)




