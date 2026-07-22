// Capturar o peso e altura

const { createContext, createElement } = require("react")

// Validar se o valo inserido é do tipo number
// Informar o resultado do IMC para o usuário

// Efetuar o calculo do IMC peso x (altura x altura)
// Retornar qual o categoria do IMC o usuário se encontra

// Menor que 18,5: Abaixo do peso
// Entre 18,5 e 24,9: Peso normal
// Entre 25 e 29,9: Sobrepeso
// Entre 30 e 34,9: Obesidade grau 1
// Entre 35 e 39,9: Obesidade grau 2
// Maior ou igual a 39,9: Obesidade grau 3

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if(!peso) {
        console.log("Peso invalido")
    }

    if(!altura) {
        console.log("Altura invalida")
    }

    
})


const getNivelImc = (imc) => {
    const imcCategoria = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc < 18.5) { return imcCategoria[0]}
    if(imc >= 18.5 && imc <= 24.9) { return imcCategoria[1]}
    if(imc >= 25 && imc <= 29.9) { return imcCategoria[2]}
    if(imc >= 30 && imc <= 34.9) { return imcCategoria[3]}
    if(imc >= 35 && imc <= 39.9) { return imcCategoria[4]}
    if(imc > 39.9) { return imcCategoria[5]}
}

