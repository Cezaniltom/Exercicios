"use strict";
// // type Aluno = { // => Sempre com a Primeira letra maiuscula
// //     nome: string;        => props
// //     altura: number;      => props
// //     dataNasc: Date;      => props
// //     modulosCursados: Array<string>; // string[] ou Array<string>         => props
// //     ativo?: boolean;         => props
// //     estudar?: () => void;        => metodo
// //     parabenizar?: () => void;        => metodo
// // };
// //                                  ****IMPORTANTE****
// // // Classe é a representação em programação orientada a objetos de uma entidade da vida real
// // // Instância de uma classe é um "indivíduo" que pertence àquela classe
// // // Propriedades/Atributos de uma classe são as características que definem e ajudam a diferenciar instâncias dessa classe
// // // Métodos de uma classe são ações desempenhadas pelas instâncias daquela classe
// // let objAluno: Aluno = {
// //     "nome": "Daniel Mariz",
// //     "altura": 1.79,
// //     "dataNasc": new Date("13-09-2024"),
// //     "modulosCursados": ["Frontend Estático", "Lógica de Programação"],
// //     estudar() {
// //         console.log(`${this.nome} está estudando...`); => o this tá funcionando porque o metodo estudar está sendo passado direto. Em arrow function ele teria que pegar o           obtAluno.nome
// //     },
// //     parabenizar() {
// //         // se a data de hoje for igual à data de nascimento, deseje feliz aniversário
// //     }
// // };
// // console.log(objAluno)
// class AlunoClass {
//     // Declarando TODAS as propriedades da classe
//     nome: string;
//     altura: number;
//     dataNasc: Date;
//     modulosCursados: Array<string>; // string[] ou Array<string>
//     ativo?: boolean;
//     // O método CONSTRUTOR é o método executado quando criamos uma nova instância da classe
//     // Ou seja, quando executarmos new AlunoClass()
//     constructor(nome: string, altura: number, dataNasc: string, modulosCursados: Array<string>) {
//         this.nome = nome;
//         this.altura = altura;
//         this.dataNasc = new Date(dataNasc);
//         this.modulosCursados = modulosCursados;
//         this.ativo = true;
//     }
//     estudar() {
//         console.log(`${this.nome} está estudando...`);
//     }
//     parabenizar() {
//         // se a data de hoje for igual à data de nascimento, deseje feliz aniversário
//         const today = new Date();
//         const sameDay = today.getDay() == this.dataNasc.getDay();
//         const sameMonth = today.getMonth() == this.dataNasc.getMonth();
//         if(sameDay && sameMonth) {
//             console.log(`Ahá Uhú, ow ${this.nome} vou comer seu bolo!`);
//         } else {
//             console.log(`Ainda não chegou no seu aniversário...`);
//         }
//     }
// }
// // "1997-01-19"
// const alunoNovo: AlunoClass = new AlunoClass("Karolyne Carvalho", 1.53, "1997-09-13", ["Frontend Estático", "Lógica de Programação"]);
// console.log(alunoNovo);
// alunoNovo.parabenizar();
// alunoNovo.estudar();
// const alunoNovo2: AlunoClass = new AlunoClass("Francisco Cezaniltom", 1.75, "1999-03-18", ["Frontend Estático", "Lógica de Programação"]);
// console.log(alunoNovo2);
// alunoNovo2.parabenizar();
// alunoNovo2.estudar();
