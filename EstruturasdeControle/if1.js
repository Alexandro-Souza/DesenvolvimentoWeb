function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com a' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.7)

function seForverdadeeuFalo(valor) {
    if (valor){
        console.log('É Verdade...' + valor)
    }
}

seForverdadeeuFalo()
seForverdadeeuFalo(null)
seForverdadeeuFalo(undefined)
seForverdadeeuFalo(NaN)
seForverdadeeuFalo('')
seForverdadeeuFalo(0)
seForverdadeeuFalo(-1)
seForverdadeeuFalo(' ')
seForverdadeeuFalo('?')
seForverdadeeuFalo([])
seForverdadeeuFalo([1, 2])
seForverdadeeuFalo({})