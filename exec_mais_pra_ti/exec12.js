// 12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
// eretorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso

// ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')()

function calcularPesoIdeal(alt, sexo) {
  if (sexo.toUpperCase() === 'M') {
    return (72.7 * alt) - 58
  } else if (sexo.toUpperCase() === 'F') {
    return (62.1 * alt) - 44.7
  } else {
    return null 
  }
}

let alturaDigitada = prompt('Digite a altura em metros (ex: 1.75): ').replace(',', '.')
let alt = parseFloat(alturaDigitada)
let sexo = prompt('Digite o sexo (M para Masculino, F para Feminino): ')
let pesoIdeal = calcularPesoIdeal(alt, sexo)

if (pesoIdeal !== null && !isNaN(alt)) {
  console.log(`\nO peso ideal para essa altura é: ${pesoIdeal.toFixed(2)} kg`)
} else {
  console.log('\nDados inválidos! Certifique-se de digitar a altura corretamente e usar "M" ou "F" para o sexo.')
}