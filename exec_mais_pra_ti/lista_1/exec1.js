// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.


const prompt = require('prompt-sync')();
const numero = prompt('Insira um número ')

if(numero >= 0 && numero % 2 === 0) {
    console.log(`O número ${numero} é par!`)

} else if(numero >= 0 && numero % 2 !== 0) {
    console.log(`O número ${numero} é impar!`)
} else {
    console.log(`O número ${numero} é inválido!`)
}