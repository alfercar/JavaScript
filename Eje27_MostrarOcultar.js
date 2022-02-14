var botonmas = document.getElementById("botonmas")
var botonmenos = document.getElementById("botonmenos")

botonmas.addEventListener("click", textomas)
botonmenos.addEventListener("click", textomenos)


// Opción 1
function textomas (){
    let texto = document.getElementById("frase2");
    texto.classList.remove("textoNO");
    let botonito2 = document.getElementById("botonmenos");
    botonito2.classList.remove("textoNO");
    let botonito1 = document.getElementById("botonmas");
    botonito1.classList.add("textoNO");
}

function textomenos (){
    let texto = document.getElementById("frase2");
    texto.classList.add("textoNO");
    let botonito2 = document.getElementById("botonmenos");
    botonito2.classList.add("textoNO");
    let botonito1 = document.getElementById("botonmas");
    botonito1.classList.remove("textoNO");
}


//Opción 2

// function textomas(){
//     let texto = document.getElementById("frase2");
//     texto.classList.toggle("textoNO")

// }


//Opcion 3

// botonmas.addEventListener("click", textomas)
// function textomas (){
//     let parrafo2 = document.getElementById("frase2");
//     if(parrafo2.style.display === 'none'){
//         parrafo2.style.display = 'block';
//         document.getElementById('botonmas').innerHTML = "Menos"
//     }
//     else {
//         parrafo2.style.display = 'none';
//         document.getElementById('botonmas').innerHTML = "Mas"
//     }

// }

