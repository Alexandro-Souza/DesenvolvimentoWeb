Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('O cara é menino de Honra')
    }else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if (nota.entre(4, 6.99)){
        console.log('Recuperacao agora')
    }else if (nota.entre(0, 3,99)){
        console.log('Reprovado')
    }else{
        console.log('Nota invalida')
    }

    
}

imprimirResultado(1)
imprimirResultado(10)
imprimirResultado(2)
imprimirResultado(-5)
imprimirResultado(6.8)