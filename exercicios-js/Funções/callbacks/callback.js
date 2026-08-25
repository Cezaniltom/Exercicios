// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num)
// }

// function f1(callback) {
//     setTimeout(function() {
//         console.log('f1');
//         if(callback) callback()
//     }, rand())
// }

// function f2(callback) {
//     setTimeout(function() {
//         console.log('f2');
//         if(callback) callback()
//     }, rand())
// }

// function f3(callback) {
//     setTimeout(function() {
//         console.log('f3');
//         if(callback) callback()
//     }, rand())
// }

// f1(f1callback);

// function f1callback() {
//     f2(f2callback);
// }

// function f2callback() {
//     f3(f3callback);
// }

// function f3callback() {
//     console.log('Olá Mundo!');
// }

// Callback Simples: Crie uma função processar que recebe um número e uma função de callback. A função processar deve executar o callback passando o número como argumento.
// function processar(numero) {
//     numero()
//     console.log('teste')
// }

// processar(() => {
//     console.log('Qualquer número')
// })


// Função de Ordem Superior: Escreva uma função criarMultiplicador que recebe um número fator e retorna outra função. A função retornada deve receber um número e retornar a multiplicação desse número pelo fator.
// function criarMultiplicador(numeroF) {
//     return function(num1) {
//         return num1 * numeroF
//     }
// }

// const multiplicar = criarMultiplicador(10)
// const resultado = multiplicar(5)

// console.log(resultado)