let kms_recorridos = prompt("¿Cuántos kilometros has hecho con mi vehículo, campeon?")

let vehiculo = prompt("¿Qué vehiculo llevabas, coche, moto o autobus?")
let litros_consumidos = 0
let precio_kilometro = 0
let precio = 0

// const vehiculos = ["coche", "moto", "autobus"]
// const precio_kilometro = [0.1, 0.2, 0.5]

if (vehiculo == "coche"){
    precio_kilometro = 0.10
    precio = precio_kilometro*kms_recorridos
}
else if (vehiculo == "moto"){
    precio_kilometro = 0.20
    precio = precio_kilometro*kms_recorridos
}
else if (vehiculo == "autobus"){
    precio_kilometro = 0.50
    precio = precio_kilometro*kms_recorridos
}
else {
    alert("Eso no vale, recarga la pagina e intentalo de nuevo")
}



if ( kms_recorridos<100){
    precio1 = precio + 1
}
else if (kms_recorridos>100){
    precio1 = precio + 2
}

 

alert("El precio será de: "+ precio1+ " €")



