const carrinho = ['{"nome":"Borracha","Preco":"3.45"}',
                  '{"nome":"Caderno","Preco":"13.90"}',
                  '{"nome":"Kit de Lapis","Preco":"41.22"}',
                  '{"nome":"Caneta","Preco":"7.50"}',

]

// retornar um array apenas com os precos de cada produtos

const Objeto = json => JSON.parse(json)
const Preco = produto => produto.Preco

const Resultado = carrinho.map(Objeto).map(Preco)
console.log(Resultado)

