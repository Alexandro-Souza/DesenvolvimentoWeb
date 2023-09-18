const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parse')
const bancodeDados = require('./bancodeDados')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',(req,res,next)=> {
    res.send(bancodeDados.getprodutos())
})

app.get('/produtos/id', (req, res, next) =>{
    res.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produto', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco,
    })
    res.send(produto)
})
//
//app.get('/produtos',(req, res, next) => {
//    res.send({ nome: 'Notebook', preco: 123.45})// Converter para JSON
//})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})