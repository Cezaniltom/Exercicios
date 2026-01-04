"use strict";
class AnimalClass {
    // Array<string>
    constructor(nome, tempoVida, extincao, especie, tipo) {
        this.nome = nome;
        this.tempoVida = new Date(tempoVida);
        this.extincao = extincao;
        this.especie = especie;
        this.tipo = tipo;
    }
    maturidade() {
        const hoje = new Date();
        const atual = hoje.getFullYear() - this.tempoVida.getFullYear();
        if (atual <= 3) {
            console.log(`O(a) ${this.nome} está na fase inicial da vida`);
        }
        else if (atual > 3 && atual <= 5) {
            console.log(`O(a) ${this.nome} está na fase da adolescencia`);
        }
        else {
            console.log(`O(a) ${this.nome} está na fase adulta`);
        }
    }
}
const animalNovo = new AnimalClass('Leão', '2010-02-15', true, 'Panthera leo', 'Mamifero');
console.log(animalNovo);
animalNovo.maturidade();
const animalNovo2 = new AnimalClass('Lobo', '2020-07-30', false, 'Canis', 'Carnivoro');
console.log(animalNovo2);
animalNovo2.maturidade();
const animalNovo3 = new AnimalClass('Baleia', '2022-03-14', false, 'Cachalote', 'Peixe');
console.log(animalNovo3);
animalNovo3.maturidade();
