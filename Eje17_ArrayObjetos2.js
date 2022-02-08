const namesOnly = [
    {name: 'Angelina Jolie', age:24},
    {name: 'Eric Jones', age:2},
    {name: 'Paris Hilton', age:5},
    {name: 'Kanye Wets', age:16},
    {name: 'Bob Ziroll', age:100},];

console.log(namesOnly)

let cineastas = namesOnly.map(function(nombres){
    return nombres.name
}).concat()

console.log(cineastas)

//También se puede hacer así: console.log(cineastas.concat())
//Le quitas el .concat de otro lado y se lo pones en consola

