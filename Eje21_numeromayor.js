let lista = [20,2,58,35,13,23,42,654,3475,678]
let numG = []

for (let i=0; i<lista.length; i++){
    if ( lista[i]> numG){
        numG = lista[i];
    }
}
alert ("El numero mas grande es el: " +numG)
alert (`Estoy hasta los cuyons`)
alert (`Nah, en verdad no. El numero mas grande es el ${numG}`)