console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array ('Bia','Ana','Clarice')
console.log(aprovados)

aprovador = ['Bia','Ana','Clarice']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

// adicionando um novo dado dentro de um array
aprovados[3] = 'Paulo'
aprovados.push('Abia')

console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
// vai ordenar o array em ordem alfabetica
aprovados.sort()
console.log(aprovados)
// para excluir o array
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia','Carlor','Ana']
// splice adicionar elemento tambem para removerou adicionar ao mesmo tempo
aprovados.splice(1, 1, 'Elemento1','Elemento2')
console.log(aprovados)






