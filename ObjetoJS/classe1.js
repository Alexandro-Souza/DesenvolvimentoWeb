class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = 0
        this.valor = valor

    }
}

class CicliFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }
    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 450000)
const contadeLuz = new Lancamento('Luz', -200)

const contas = new CicliFinanceiro(6, 2018)
contas.addLancamento(salario, contadeLuz)
console.log(contas.sumario())