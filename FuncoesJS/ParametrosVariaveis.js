function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2,2.4))
console.log(soma(1,1.7, "teste"))



// estrategia 1 para gerar valor padrao
function soma1(a,b,c){
    a =a || 1
}