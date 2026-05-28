// 7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
// média aritmética desses números.

const prompt = require('prompt-sync')()

let soma = 0
let quantidade = 0

for (;;) {
    let entrada = prompt('Digite um número decimal (0 para encerrar): ').replace(',', '.')
    let numero = Number(entrada)

    if (numero === 0) {
        break
    }

    if (!isNaN(numero) && entrada.trim() !== '') {
        soma += numero
        quantidade++
    }
    }

    if (quantidade > 0) {
    const media = soma / quantidade
    console.log(`\nA média aritmética é: ${media.toFixed(2)}`)
    } else {
    console.log('\nNenhum número foi digitado para calcular a média.')
}