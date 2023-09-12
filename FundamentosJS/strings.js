const escola = "Escolinha"


console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charAt(6))
console.log(escola.charAt(7))
console.log(escola.charAt(8))
//unicode
console.log(escola.charCodeAt(3))
//Pergundando sobre o indice
console.log(escola.indexOf('i'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log('Uma ' .concat(escola).concat("!"))

console.log('Ana,Maria,Pedro'.split(','))

//usando template

const nome = 'Rebeca'
const concatenacao = 'ola ' + nome + '!'
const template =`

Olá
${nome}!`
console.log(concatenacao, template)

console.log(`1+ 1 = ${1 + 1} `)


const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')} !`)


