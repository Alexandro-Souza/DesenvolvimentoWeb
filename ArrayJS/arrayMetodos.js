const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
// remove o ultmimo elemento
pilotos.pop(pilotos) // massa quebrou o carro
// adiciona no array
pilotos.push('Verstappen')
console.log(pilotos)
// retira da primeira posição
pilotos.shift()
console.log(pilotos)

// unshift adiciona no incio do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover
// adicionando
pilotos.splice(2,0, 'Bottas','Massa')
console.log(pilotos)
// removendo
pilotos.splice(3, 1)
console.log(pilotos)
// novo array quando usamos slice pelo indice ()
const algumsPilotos = pilotos.slice(2)
console.log(algumsPilotos)

const algumsPilotos2 = pilotos.slice(1, 4)
console.log(algumsPilotos2)