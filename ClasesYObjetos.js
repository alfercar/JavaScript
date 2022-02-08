//Clases

class Food {
    value = 10;
    color = 'red';
    eat () {
        console.log('yummy');
    }
}

//Instancia de clase
const apple = new Food(); //diferentes cosas que se ven
apple.type = 'Reineta';
apple.show = () => console.log('Es una manzana')
apple.hide = function(){
    return 'nope'
}

const donut = new Food();

// Clases 2

class Coche {
    constructor(marca, año, color){
        this.brand = marca;
        this.year = año;
        this.color = color;
        this.show = function(){
            return 'El coche es de marca '+ this.brand;
        }
    
    }
    run (){
        console.log('listo calisto')
    }
}

const hyundai = new Coche ('Hyundai', 2013, 'amarillo')
const coche2 = new Coche ('Kia', 2008, 'azul oscuro')