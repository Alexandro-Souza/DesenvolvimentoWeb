// Factory 

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2900))
console.log(criarProduto('TV 50', 1900))