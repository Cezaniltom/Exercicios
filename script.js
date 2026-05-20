class Pilha{
    constructor() {
        this.itens = []
    }

    push(e) {
        this.itens.push(e)
    }

    pop(e) {
        this.itens.pop(e)
    }

    print() {
        console.log(this.itens)
    }
}

const pilha = new Pilha()
pilha.push('A')
pilha.print()
pilha.pop()