// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome:'Ana'} nao pode atribuir novamente

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

//quando usamos o freezee nao conseguimos fazer nenhuma modificacao

// mais um exemplo 

const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)