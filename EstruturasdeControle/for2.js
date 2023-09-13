
const notas = [6.7, 7.4, 8.5, 7.9, 5.8]

for(i in notas){
    console.log(i, notas[i])
}
 const pessoal = {
    nome: 'Joazinho',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
 }

 for (atributo in pessoal){
    console.log(`${atributo} = ${pessoal[atributo]}`)
 }