// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

const peso = Number(prompt('Informe seu peso '))
const alturaCM = Number(prompt('Informe sua altura em centimentros '))
const alturaMT = alturaCM / 100
const setResultado = peso / (alturaMT ** 2)

if (setResultado < 18.5) {
    console.log(`O IMC ${setResultado} está abaixo do peso`)
} else if (setResultado >= 18.5 && setResultado < 25) {
    console.log(`O IMC ${setResultado} está com o peso normal`)
} else if (setResultado >= 25 && setResultado < 30) {
    console.log(`O IMC ${setResultado} está com sobrepeso`)
} else if (setResultado >= 30 && setResultado < 35) {
    console.log(`O IMC ${setResultado} está com obesidade grau I`)
} else if (setResultado >= 35 && setResultado < 40) {
    console.log(`O IMC ${setResultado} está com obesidade grau II`)
} else if (setResultado >= 40) {
    console.log(`O IMC ${setResultado} está com obesidade grau III`)
} else {
    console.log('O valor é inválido')
}