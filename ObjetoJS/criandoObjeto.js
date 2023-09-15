// usando a notacao literal

const obj = {}
console.log(obj)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes construtores
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getprecoComDesconto= ( ) => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7,99, 0.15)
const p2 = new Produto('Lapis', 2,99, 0.35)
console.log(p1.getprecoComDesconto(), p2.getprecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getsalario(){
            return(salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7990, 4)
const f2 = criarFuncionario('Rebeca', 11290, 6)
console.log(f1.getsalario(), f2.getsalario())

// Onject.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna objeto

const fromJSON = JSON.parse('info soou um json')
console.log(fromJSON.info)