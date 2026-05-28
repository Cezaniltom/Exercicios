// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
// "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()
const nota = () => {
    const getnota = prompt('Informe sua nota ')

    if (getnota > 0 && getnota < 5) {
        console.log(`A nota ${getnota} é considerada como Reprovado`)
    } else if (getnota >= 5 && getnota < 7) {
        console.log(`A nota ${getnota} é considerada como Recuperacao`)
    } else if (getnota >= 7 && getnota <= 10) {
        console.log(`A nota ${getnota} é considerada como Aprovado`)      
    } else {
        console.log(`A nota ${getnota} é Inválida`)                
    }
}

nota()