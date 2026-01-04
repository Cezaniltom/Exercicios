// Exercício 3:

const valores = [25, 18, 32, 12, 20, 28];

let maiorValor = valores[0];

for (let i = 0; i < valores.length; i++) {

    if(maiorValor < valores[i]) {
        maiorValor = valores[i];
    }
}

console.log(maiorValor)