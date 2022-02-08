//Primera manera de hacerlo

console.log("Aqui la primera manera de hacerlo")

const users = [
    {username: 'topito', age:24, premium: false},
    {username: 'coca', age:24, premium: true},
    {username: 'llegatarde', age:26, premium: false},
    {username: 'yomismo', age:24, premium: true}, 
    {username: 'Pati', age:22, premium: true}, 
    {username: 'Bruja', age:8, premium: false}, 
    {username: 'CR7', age:37, premium: true}, 
];

const paga = users.filter (function(user){
    return user.premium == true
})

const nopaga = users.filter (function(user){
    return user.premium == false
})

const Bicho = users.filter (function(user){
    return user.premium == true && user.username == 'CR7' && user.age <45
})
console.log("Los usuarios que pagan son los siguientes: ",paga)
console.log("Los usuarios que no pagan son los siguientes: ",nopaga)


for (const nombrepaga of paga){
    console.log("El usuario " +nombrepaga.username+" paga la cuota")
}

for (const nombrenopaga of nopaga){
    console.log("El usuario " +nombrenopaga.username+" paga la cuota")
}

for (const nombrecrack of Bicho){
    console.log("El usuario " +nombrecrack.username+" paga la cuota, SIIIUUUUUUUU")
}



//OTRA MANERA DE HACERLO

console.log("Aqui la segunda manera de hacerlo")

users.map(function(user){
    if (user.premium === true)
    console.log('El usuario '+user.username+ ' es premium')

})

users.map(function(user){
    if (user.premium === false)
    console.log('El usuario '+user.username+ ' no es premium')

})



