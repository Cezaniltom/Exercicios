// 13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
// seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// ○ Matrícula:
// ○ Nome:
// ○ Salário bruto:
// ○ Dedução INSS:
// ○ Salário líquido:
// ○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
// redução do INSS).

const prompt = require('prompt-sync')()

const total_funcionario = 80
const taxa_inss = 0.12

for (let i = 0; i < total_funcionario; i++) {
  console.log(`\n--- Dados do ${i + 1}º Funcionário ---`)
  
  let matricula = prompt('Matrícula: ')
  let nome = prompt('Nome: ')
  let salarioBruto = parseFloat(prompt('Salário Bruto: R$ ').replace(',', '.'))

  if (isNaN(salarioBruto)) {
    console.log('Valor de salário inválido. Tente novamente.')
    i--
    continue
  }

  let deducaoINSS = salarioBruto * taxa_inss
  let salarioLiquido = salarioBruto - deducaoINSS

  console.log('\n===================================')
  console.log('           CONTRACHEQUE            ')
  console.log('===================================')
  console.log(`Matrícula:      ${matricula}`)
  console.log(`Nome:           ${nome}`)
  console.log(`Salário bruto:  R$ ${salarioBruto.toFixed(2)}`)
  console.log(`Dedução INSS:   R$ ${deducaoINSS.toFixed(2)}`)
  console.log(`Salário líquido:R$ ${salarioLiquido.toFixed(2)}`)
  console.log('===================================\n')
}