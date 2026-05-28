// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// ● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
// A + B
// ● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// ● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// ● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()

const trianguloA = Number(prompt('Informe o lado A '))
const trianguloB = Number(prompt('Informe o lado B '))
const trianguloC = Number(prompt('Informe o lado C '))

if (
    trianguloA < trianguloB + trianguloC &&
    trianguloB < trianguloA + trianguloC &&
    trianguloC < trianguloA + trianguloB
    ) {
    console.log('\nOs lados informados formam um triângulo!')

    if (trianguloA === trianguloB && trianguloB === trianguloC) {
        console.log('Tipo: Triângulo Equilátero')
    } else if (
        trianguloA === trianguloB ||
        trianguloA === trianguloC ||
        trianguloB === trianguloC
    ) {
        console.log('Tipo: Triângulo Isósceles')
    } else {
        console.log('Tipo: Triângulo Escaleno')
    }
    } else {
    console.log('\nOs lados informados NÃO formam um triângulo.')
}