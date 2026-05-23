// 8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
// um loop for ou while.

const prompt = require('prompt-sync')()

const numero = parseInt(prompt('Digite um número para calcular o fatorial: '))

if (isNaN(numero) || numero < 0) {
    console.log('Por favor, digite um número inteiro positivo.')
    } else {
    let fatorial = 1

    for (let i = numero; i > 1; i--) {
        fatorial *= i
    }

    console.log(`O fatorial de ${numero}! é: ${fatorial}`)
}