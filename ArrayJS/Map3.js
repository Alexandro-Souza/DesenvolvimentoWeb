Array.prototype.map2 = function(callback){
    const newArray= []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i ,this))
    }
    return newArray
}

const carrinho = ['{"nome":"Borracha","Preco":"3.45"}',
                  '{"nome":"Caderno","Preco":"13.90"}',
                  '{"nome":"Kit de Lapis","Preco":"41.22"}',
                  '{"nome":"Caneta","Preco":"7.50"}',

]

// retornar um array apenas com os precos de cada produtos

const Objeto = json => JSON.parse(json)
const Preco = produto => produto.Preco

const Resultado = carrinho.map2(Objeto).map2(Preco)
console.log(Resultado)
