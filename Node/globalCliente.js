require("./global")

console.log(MinhaApp.saudacao())

// trocando uma variavel global isso nao e recomendado
MinhaApp.nome = 'O loco Bixo '
console.log(MinhaApp.nome)