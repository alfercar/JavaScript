
function cambio(){
    var city = document.getElementById("select").value;
    document.getElementById("frase").innerHTML = "La ciudad seleccionada es: " + city;
    if (city == ""){
        document.getElementById("frase").innerHTML = "No tiene seleccionada ninguna opción"
    }
}
