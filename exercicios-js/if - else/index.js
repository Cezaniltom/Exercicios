// Exercício Fácil:
// Escreva um programa em JavaScript que verifica se um número é positivo, negativo ou igual a zero.

// const positivoNegativo = -1

// if(positivoNegativo > 0 ) {
//     console.log('O número é positivo')
// } else if (positivoNegativo < 0) {
//     console.log('O número é negativo')
// } else {
//     console.log('O número é igual a zero')
// }




// Exercício Moderado:
// Escreva um programa em JavaScript que verifica se um número é par ou ímpar.


// const parImpar = 5

// if(parImpar % 2 == 0) {
//     console.log('O número é par')
// } else {
//     console.log('O número é impar')
// }




// Exercício Intermediário:
// Escreva um programa em JavaScript que verifica se um número é divisível por 3 e por 5 ao mesmo tempo


// const divisivel = 32

// if(divisivel % 3 == 0 && divisivel % 5 == 0 ) {
//     console.log('O número é divisivel')
// } else {
//     console.log('O número não é divisivel')
// }



// Exercício Avançado:
// Escreva um programa em JavaScript que verifica se um ano é bissexto.
// Dica: um ano bissexto é divisível por 4, mas não por 100, a menos que também seja divisível por 400.


// const bissexto = 2156

// if(bissexto % 4 == 0 && bissexto % 100 != 0 || bissexto % 400 == 0) {
//     console.log('O ano é Bissexto')
// } else {
//     console.log('O ano não é Bissexto')
// }




// Exercício Desafiador
// Escreva um programa em JavaScript que verifica se um número é um palíndromo.

// Obs: Um palíndromo é um número que permanece o mesmo quando seus dígitos


// const palindromo = 1234321;
// const palindromoString = palindromo.toString();


// if(palindromoString.length === 7) {

//     if(palindromoString[0] === palindromoString[6] && palindromoString[1] === palindromoString[5] && palindromoString[2] === palindromoString[4]){
//         console.log('O número é palíndromo');
//     } else {
//         console.log('O número não é palíndromo');
//     }

// } else {
//     console.log('O número não é de 6 digitos');
// }