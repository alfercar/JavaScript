class Mates {
    constructor(lado){
        this.lado = lado;
        this.area = function(){
            return lado*lado
        };
        this.perimetro = function(){
            return lado*4
        };
    }
}

const pequeño = new Mates (2);
const mediano= new Mates (5);
const ladogrande = 10
const grande = new Mates (ladogrande); 