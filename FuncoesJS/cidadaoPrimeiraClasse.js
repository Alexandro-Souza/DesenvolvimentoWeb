// Função em JS é Fisrt-Class Object
// Higher-ordem function

// Create literal form

function fun1(){ }

// Armazenar em uma variável
const fun2 = function(){}

// Armazenar em um array

const array = [function(a,b) { return a+ b}, fun1, fun2]
console.log(array[0](2, 3))

// |Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

// Passar funcao como param
function run(fun){
    fun()
}

run(function(){
    console.log('Executando.....')})

// Uma Função pode Retornar/conter um função
function soma(a, b){
    return function(c) {
        console.log(a +b + c)
    }
}    
soma(2,3)(5)

