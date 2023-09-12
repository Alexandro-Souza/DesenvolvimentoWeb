function tratarerroeLancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    throw{
        nome: erro.nome,
        msg:  erro.message,
        date: new Date
    }
}
function imprimirnome(obj){
    try{
        console.log(obj.name.toUppercase() + '!!!')
    } catch(e){
        tratarerroeLancar(e)
    } finally{
        console.log('final')
    }
}


const obj = { nome: 'Roberto' }
imprimirnome(obj)