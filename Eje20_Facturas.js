class Cliente {
    constructor(nombre, direccion, telefono, nif){
        this.name = nombre;
        this.adress = direccion;
        this.phone = telefono;
        this.id = nif;
    }
}

const juifer = new Cliente ('Juanig', 'casa', 649867744, '0987656789B')

class Elemento {
    constructor(descripcion,cantidad,precio){
        this.descrip = descripcion;
        this.quantity = cantidad;
        this.price = precio;
    }
}

const gasofa = new Elemento ('gasolina', '50 L',+ 100+' €')


class Factura {
    constructor(cliente, elementos){
        this.cliente = cliente;
        this.elements = elementos;
        this.info = {  //esto es una pseudoclase
            baseImponible: 0,
            iva: 21,
            total:0,
            formaPago: "contado",
            
        }
        this.calculos = function(){
            //base imponible es precio* cantidad, el bucle se ejecuta tantas veces como elementos tenga en el array
            for (let i=0;i < this.elements.length ; i++){
                this.info.baseImponible += this.elements[i].quantity * this.elements[i].price;
            }
            console.log('Total a pagar sin impuestos ;):  ', this.info.baseImponible)

            this.info.total = this.info.baseImponible * (1+(this.info.iva/100))

            console.log('Total a pagar incluyendo la parte de Montoro: ', this.info.total)
        }
        
    }
}

const cliente1 = new Cliente ('Alfonso','Casa',1234,'12345A')
const articulo1 = new Elemento ('boli', 5, 1)
const articulo2 = new Elemento ('lapiz', 1, 2)

const facturita = new Factura (cliente1, [articulo1, articulo2]) //para sacar el precio en console: facturita.elements[0].price