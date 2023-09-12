// par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto Léxico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Alexandro',
    idade: 32,
    peso: 105,
    endereco: {
    logradouro: 'rua irmâ maria angela',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
