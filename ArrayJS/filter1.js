const produtos = [
    { nome: 'Notebook', preco: 4500 , fragil: true},
    { nome: 'iPhone', preco: 10000, fragil: true},
    { nome: 'ArCondicionado', preco: 2500, fragil: false},
    { nome: 'Geladeira', preco: 1200, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

console.log(produtos.filter(function(a){
    return a.preco >= 1300
}))


const caro = produto => produto.preco >= 1300
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
