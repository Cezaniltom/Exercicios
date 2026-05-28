// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')()
const idade = () => {
    const getIdade = prompt('Informe sua idade ')

    if (getIdade > 0 && getIdade <= 12) {
        console.log(`A idade ${getIdade} é considerado Criança`)
    } else if (getIdade > 12 && getIdade < 18) {
        console.log(`A idade ${getIdade} é considerado Adolescente`)
    } else if (getIdade >= 18 && getIdade <= 65) {
        console.log(`A idade ${getIdade} é considerado Adulto`)
    } else if (getIdade > 65){
        console.log(`A idade ${getIdade} é considerado Idoso`)        
    } else {
        console.log(`A idade ${getIdade} é Inválida`)                
    }
}

idade()