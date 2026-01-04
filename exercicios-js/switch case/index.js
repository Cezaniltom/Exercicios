// Exercício Fácil
// Escreva um programa em JavaScript que recebe uma cor em inglês e retorna o seu nome em português. As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto).

// const color = 'black'

// switch (color) {
//     case 'red':
//         console.log('Vermelho')
//         break;
    
//     case 'blue':
//         console.log('Azul')
//         break;
    
//     case 'green':
//         console.log('Verde')
//         break;

//     case 'yellow':
//         console.log('Amarelo')
//         break;

//     case 'black':
//         console.log('Preto')
//         break;

//     default:
//         console.log('Essa cor não é válida')
//         break;
// }




// Exercício Moderado
// Escreva um programa em JavaScript que recebe um número de 1 a 12 e retorna o mês correspondente. Caso seja um número inválido retorna "Número inválido.”


// let mes = 3;

// switch (mes) {
//     case 1:
//         console.log('Janeiro')
//         break;
//     case 2:
//         console.log('Fevereiro')
//         break;
//     case 3:
//         console.log('Março')
//         break;
//     case 4:
//         console.log('Abril')
//         break;
//     case 5:
//         console.log('Maio')
//         break;
//     case 6:
//         console.log('Junho')
//         break;
//     case 7:
//         console.log('Julho')
//         break;
//     case 8:
//         console.log('Agosto')
//         break;
//     case 9:
//         console.log('Setembro')
//         break;
//     case 10:
//         console.log('Outubro')
//         break;
//     case 11:
//         console.log('Novembro')
//         break;
//     case 12:
//         console.log('Dezembro')
//         break;       
//     default:
//         console.log('Não é um valor válido')
//         break;
// }






// Exercício Intermediário
// Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se é uma vogal ou uma consoante.


// let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// let letraInformada = 'v';

// for (let i = 0; i < alfabeto.length; i++) {
    
//     if (alfabeto[i] === letraInformada) {
        
//         switch (letraInformada) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 console.log('A letra informada é uma vogal');
//                 break;
//             default:
//                 console.log('A letra informada é uma consoante');
//                 break;
//         }
//     }
// }





// Exercício Avançado
// Crie um programa em JavaScript que implemente uma calculadora básica. A função `calculadora` receberá dois números como parâmetro e um terceiro parâmetro indicando a ação a ser executada. As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar". O resultado da operação deve ser retornado pela função.
// **Exemplo de uso:** `calculadora(5, 3, "somar")` deve retornar 8.


// function calculadora(num1, num2, operacao) {
//     switch (operacao) {
//         case "somar":
//             return num1 + num2;
//         case "subtrair":
//             return num1 - num2;
//         case "multiplicar":
//             return num1 * num2;
//         case "dividir":
//             return num1 / num2;
//         default:
//             return "Operação inválida.";
//     }
// }

// console.log(calculadora(2, 1, "dividir"));




// Exercício Desafiador
// Escreva um programa em JavaScript que recebe um número de 1 a 7 e retorna o dia da semana correspondente. 
// Além disso, implemente uma verificação adicional utilizando `if-else` para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado), e "Dia útil" caso contrário.

// **Exemplo de uso:** `verificarDiaSemana(3)` deve retornar "Quarta-feira, Dia útil".

// **Dica:** Utilize os valores de 1 a 7 para representar os dias da semana, sendo 1 para domingo, 2 para segunda-feira e assim por diante.



let diaSemana = 1;

switch (diaSemana) {
    case 1:
        diaSemana = 'Domingo'
        break;
    case 2:
        diaSemana = 'Segunda-feira'
        break;
    case 3:
        diaSemana = 'Terça-feira'
        break;
    case 4:
        diaSemana = 'Quarta-feira'
        break;
    case 5:
        diaSemana = 'Quinta-feira'
        break;
    case 6:
        diaSemana = 'Sexta-feira'
        break;
    case 7:
        diaSemana = 'Sábado'
        break;
    default: 
        break;
}
    
if (diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    console.log(`${diaSemana}, Fim de semana`)
} else if (diaSemana >= 8 || diaSemana <= 0 ){
    console.log('Valor inválido')
} else {
    console.log(`${diaSemana}, Dia útil`)
}

