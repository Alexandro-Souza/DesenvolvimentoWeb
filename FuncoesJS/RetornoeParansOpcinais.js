function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima doo permitido: ${area} m2.`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(7,4,6,7))
console.log(area(5,5))