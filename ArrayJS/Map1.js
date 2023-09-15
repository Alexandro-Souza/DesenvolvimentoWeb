const nums = [1,2,3,4,5]

// for com proposito

let Resultado = nums.map(function(e){
    return e * 2
})

console.log(Resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.','.')}`

Resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(Resultado)