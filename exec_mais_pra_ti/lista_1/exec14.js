// 14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
// sobre salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até
// R$350,00.

const prompt = require('prompt-sync')()

function processarPesquisa() {
  let somaSalario = 0
  let somaFilhos = 0
  let totalPessoas = 0
  let maiorSalario = 0
  let pessoasAte350 = 0

  console.log('--- Pesquisa da Prefeitura ---')
  console.log('(Para encerrar a pesquisa, digite um salário negativo, ex: -1)\n')

  while (true) {
    let salario = parseFloat(prompt('Salário da família: R$ ').replace(',', '.'))

    if (salario < 0) {
      break
    }

    if (isNaN(salario)) {
      console.log('Valor inválido! Digite um número para o salário.\n')
      continue
    }

    let filhos = parseInt(prompt('Número de filhos: '))

    if (isNaN(filhos) || filhos < 0) {
      console.log('Valor inválido! O número de filhos deve ser um número inteiro positivo.\n')
      continue
    }

    somaSalario += salario
    somaFilhos += filhos
    totalPessoas++

    if (salario > maiorSalario) {
      maiorSalario = salario
    }

    if (salario <= 350) {
      pessoasAte350++
    }
    
    console.log('--- Registro salvo! Próxima pessoa: ---\n')
  }

  if (totalPessoas === 0) {
    return null
  }

  return {
    mediaSalario: somaSalario / totalPessoas,
    mediaFilhos: somaFilhos / totalPessoas,
    maiorSalario: maiorSalario,
    percentualAte350: (pessoasAte350 / totalPessoas) * 100
  }
}

const resultados = processarPesquisa()

if (resultados !== null) {
  console.log('\n=======================================')
  console.log('       RESULTADOS DA PESQUISA          ')
  console.log('=======================================')
  console.log(`Média de salário da população: R$ ${resultados.mediaSalario.toFixed(2)}`)
  console.log(`Média do número de filhos:     ${resultados.mediaFilhos.toFixed(1)} filhos`)
  console.log(`Maior salário encontrado:      R$ ${resultados.maiorSalario.toFixed(2)}`)
  console.log(`Percentual de salários até R$350: ${resultados.percentualAte350.toFixed(2)}%`)
  console.log('=======================================\n')
} else {
  console.log('\nNenhum dado válido foi inserido na pesquisa.')
}