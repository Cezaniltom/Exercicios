// 1. Desenhando um sistema de impressão (Fila de Impressão)
// Instruções:
// ● Criar uma fila que simula o processo de uma fila de impressão;
// ● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
// ● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
// ● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila.


// 2. Implementação de deque
// Instruções:
// ● Implementar uma classe Deque que permita adicionar e remover elementos tanto na frente quanto no final da estrutura;
// ● A classe deve ter os métodos: addFront(element), addBack(element), removeFront(), removeBack(), peekFront(), peekBack(), isEmpty() e size();
// ● Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades.

// Após isso, remover elementos de ambas as extremidades e mostrar o estado da
// estrutura após cada operação.


// ---------- EXEC 1 -----------
class FilaImpressao {
    constructor() {
        this.itens = []
    }

    adicionarItens(itens) {
        this.itens.push(itens)
        console.log(`Adicionando Impressão: ${itens}`)
    }

    processarImpressao() {
        console.log('Iniciando Processo de Impressão')

        while(this.itens.length > 0) {
            const removeItens = this.itens.shift()
            console.log(`Imprimindo item ${removeItens}`)
        }
        this.isValid()
    }

    isValid () {
        if(this.itens.length === 0) {
            console.log('Não há tarefas na fila')
        }
    }
}

const imprimindoItens = new FilaImpressao()

imprimindoItens.adicionarItens('Doc 1')
imprimindoItens.adicionarItens('Doc 2')
imprimindoItens.adicionarItens('Doc 3')

imprimindoItens.processarImpressao()




// ---------- EXEC 2 -----------
class Deque {
    constructor() {
        this.itens = []
    }

    addFront(e) {
        this.itens.unshift(e)
        return
    }

    addBack(e) {
        this.itens.push(e)
    }

    removeFront() {
        if(this.isEmpty()) return 'O Deque está vazio'
        return this.itens.shift()
    }

    removeBack() {
        if(this.isEmpty()) return 'O Deque está vazio'
        return this.itens.pop()
    }

    peekFront() {
        if(this.isEmpty()) return
        return this.itens[0]
    }

    peekBack() {
        if(this.isEmpty()) return
        return this.itens[this.itens.length - 1]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.itens.length
    }

}

const novoDeque = new Deque()

novoDeque.addFront('Item 1')
novoDeque.addFront('Item 2')
console.log(novoDeque.itens)

novoDeque.addBack('Item 3')
novoDeque.addBack('Item 4')
console.log(novoDeque.itens)

novoDeque.removeFront()
novoDeque.removeBack()
console.log(novoDeque.itens)

console.log(novoDeque.peekBack())
console.log(novoDeque.peekFront())

console.log(novoDeque.isEmpty())

console.log(novoDeque.size())