// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Funcao com retorno 
function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))


// nao podemos colocar do mesmo jeito que a funcao acima porque declaramos um retorno dentro da funcao
