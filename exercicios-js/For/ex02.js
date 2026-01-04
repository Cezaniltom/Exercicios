// Exercício 2:

const notas = [17, 28, 39, 96, 55, 38, 99, 50, 85];

let total = 0;

for (let i = 0; i < notas.length; i++) {
    
    total += notas[i];
}

let media = total / notas.length;

console.log(media)