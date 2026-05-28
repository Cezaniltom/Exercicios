// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fibonacci = [0, 1]

for (let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
}

console.log('Os 10 primeiros números da sequência de Fibonacci são:')
console.log(fibonacci.join(', ')) // Saída: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34