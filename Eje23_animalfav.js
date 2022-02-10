let animal = prompt ("Adivina mi animal favorito crack (en minusculas)");
let element = document.getElementById ("resultado");
let fotillo = document.getElementById ("foto")
let fotillo2 = document.getElementById ("foto2")

if (animal == "lobo"){
    element.innerHTML = "Como me conoces crack"
    element.style.color = "green"
    //También se podrían crear clases y hacerlo en css
    fotillo.classList.remove('oculto')
    
}

else{
    element.innerHTML = "Hasta luego"
    element.style.color = "red"
    fotillo2.classList.remove('oculto2')  
    
}