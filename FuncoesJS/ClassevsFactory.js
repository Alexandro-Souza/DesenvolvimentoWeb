class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu Nome ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return{
        falar: () => console.log(`Meu Nome ${this.nome}`)
    }
}

constp2 = new Pessoa('joao')
Path2D.falar()

