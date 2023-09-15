const alunos = [ 
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.5, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Aneliz', nota: 8.3, bolsista: true}

    
]

const resultado = alunos.map(a => a.nota).reduce(function(acumuladors, atual){
    console.log(acumuladors, atual)
    return acumuladors + atual
})

console.log(resultado)