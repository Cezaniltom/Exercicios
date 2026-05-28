// Ações de objetos (métodos): Use a declaração de método moderna 
// (atualizarNota(novaNota) { ... }).

// Funções soltas, callbacks ou processamento de arrays (map, filter, reduce): Use Arrow Functions () => {}.

const prompt = require('prompt-sync')()

let aluno = {
    nome: 'Juliana',
    nota: 3,
    atualizarNota(novaNota) {
        this.nota = novaNota
    }
}

const getNota = prompt('Insira a nota do aluno ')
const notaAtualizada = Number(getNota)

aluno.atualizarNota(notaAtualizada)

console.log(aluno.nota)