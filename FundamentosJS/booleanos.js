let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// aprendendo a negação nos tipos boolean
console.log(!isAtivo)
isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros.....')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('os Falso .....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false))


console.log('para finalizar...')
console.log(!!('' || null || 0 || 'epa' || ' '))

let nome = ''
console.log(nome || 'Desconhecido')



console.log()




