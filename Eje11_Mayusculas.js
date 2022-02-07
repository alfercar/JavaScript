
function tipoLetra (frase) {
    if (frase == frase.toUpperCase() ){
        return'La frase está en mayúsculas'
        }
    else if (frase == frase.toLowerCase()){
        return'La frase está en minúsculas'
        }
    else {
        return'La frase está en mayúsculas y minúsculas'
        }   
    
}

let frase = prompt("Dime una frase chula")
alert (tipoLetra(frase))

