alert('Helaaaaaados señora, baraaaaaatos. Disponemos de los siguientes toppings: sin, oreo, kitkat, brownie, lacasitos');


let sin = 1.9;
let oreo = 1.0;
let kitkat = 1.5;
let brownie = 0.75;
let lacasitos = 0.95;
let precio = sin;



let pedido = prompt ('introduce lo que quieres, gordito')


if (pedido=="oreo"){
    precio +=oreo
    console.log("Su pedido es "+precio+ " €")
    alert("Son "+precio+" €")
}

else if (pedido=="kitkat"){
    precio += kitkat
    console.log("Su pedido es de "+precio+ " €")
    alert("Son "+precio+" €")
}

else if (pedido=="brownie"){
    precio += brownie
    console.log("Su pedido es "+precio+ " €")
    alert("Son "+precio+" €")
}

else if (pedido=="lacasitos"){
    precio += lacasitos
    console.log("Su pedido es "+precio+ " €")
    alert("Son "+precio+" €")
}

else if (pedido=="sin"){
    console.log("Su pedido es "+precio+ " €")
    alert("Son "+precio+" €")
}

else {
    alert("No disponemos de ese topping, recargue la página")
}



