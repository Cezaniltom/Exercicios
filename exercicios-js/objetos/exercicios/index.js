// 1. Criando uma lista de contatos

// Crie uma lista de contatos, essa lista deve ter o seguintes dados, (minimo 12 contatos)

// - Nome
// - Telefone
// - Endereço
//     - Nome da rua
//     - Número da residência
//     - Nome do bairro
// - Data de nascimento



// const contatos = [
//     {
//         nome: "Ana Souza",
//         telefone: "(11) 98765-4321",
//         endereco: {
//             rua: "Rua das Flores",
//             numero: 123,
//             bairro: "Jardim das Rosas"},
//         dataNascimento: "15/03/1985"
//     },
//     {
//         nome: "Carlos Silva",
//         telefone: "(21) 97654-3210",
//         endereco: {
//             rua: "Avenida Brasil",
//             numero: 456,
//             bairro: "Centro"
//         },
//         dataNascimento: "22/07/1978"
//     },
//     {
//         nome: "Fernanda Lima",
//         telefone: "(31) 91234-5678",
//         endereco: {
//             rua: "Rua das Acácias",
//             numero: 789,
//             bairro: "Vila Nova"
//         },
//         dataNascimento: "10/11/1990"
//     },
//     {
//         nome: "João Pereira",
//         telefone: "(41) 99876-5432",
//         endereco: {
//             rua: "Rua das Palmeiras",
//             numero: 321,
//             bairro: "Bairro Alto"
//         },
//         dataNascimento: "05/02/1982"
//     },
//     {
//         nome: "Mariana Oliveira",
//         telefone: "(51) 92345-6789",
//         endereco: {
//             rua: "Rua São Pedro",
//             numero: 654,
//             bairro: "São José"
//         },
//         dataNascimento: "30/09/1988"
//     },
//     {
//         nome: "Ricardo Mendes",
//         telefone: "(61) 94567-8901",
//         endereco: {
//             rua: "Rua das Orquídeas",
//             numero: 987,
//             bairro: "Parque das Águas"
//         },
//         dataNascimento: "20/06/1975"
//     },
//     {
//         nome: "Juliana Costa",
//         telefone: "(71) 93012-3456",
//         endereco: {
//             rua: "Rua do Sol",
//             numero: 432,
//             bairro: "Alto da Boa Vista"
//         },
//         dataNascimento: "13/04/1995"
//     },
//     {
//         nome: "Pedro Almeida",
//         telefone: "(81) 96789-0123",
//         endereco: {
//             rua: "Avenida das Américas",
//             numero: 210,
//             bairro: "Jardim São Paulo"
//         },
//         dataNascimento: "08/12/1980"
//     },
//     {
//         nome: "Camila Santos",
//         telefone: "(91) 98712-3456",
//         endereco: {
//             rua: "Rua das Magnólias",
//             numero: 876,
//             bairro: "Jardim das Laranjeiras"
//         },
//         dataNascimento: "25/01/1987"
//     },
//     {
//         nome: "Gabriel Rocha",
//         telefone: "(11) 99823-4567",
//         endereco: {
//             rua: "Rua dos Cedros",
//             numero: 543,
//             bairro: "Vila das Oliveiras"
//         },
//         dataNascimento: "17/08/1992"
//     },
//     {
//         nome: "Tatiane Lima",
//         telefone: "(21) 98901-2345",
//         endereco: {
//             rua: "Rua das Samambaias",
//             numero: 678,
//             bairro: "Bosque dos Eucaliptos"
//         },
//         dataNascimento: "12/10/1983"
//     },
//     {
//         nome: "Lucas Martins",
//         telefone: "(31) 92345-6789",
//         endereco: {
//             rua: "Avenida das Palmeiras",
//             numero: 345,
//             bairro: "Vila Industrial"
//         },
//         dataNascimento: "19/05/1986"
//     }
    
//   ];
  




// 2. Percorrendo a lista de contato

// Crie um laço de repetição que percorra toda a lista de contatos e mostre uma frase contendo Nome, Telefone, Endereço e data de nascimento, exemplo:

// Bonus: Utilizar template string


// for (let i = 0; i < contatos.length; i++) {
    
//         console.log(`Boa noite ${contatos[i].nome}, de número ${contatos[i].telefone} e que mora na ${contatos[i].endereco.rua}, ${contatos[i].endereco.numero}, ${contatos[i].endereco.bairro} com data de nascimento no dia ${contatos[i].dataNascimento}`);
    
// }




// 3. Criando estrutura de números

// Crie laços de repetição para retornar a seguinte estrutura de numeros:

// 1
// 12
// 123
// 1234
// 12345



// for (let i = 0; i <= 5; i++) {
    
//     let numeros = '';

//     for (let j = 1; j <= i; j++) {
//         numeros += j;
//     }
    
//     console.log(numeros)
// }


// for (let i = 5; i >= 1; i--) {
    
//     let numeros = '';

//     for (let j = 1; j <= i; j++) {
//         numeros += j;
//     }
    
//     console.log(numeros)
// }





// 4. Buscando a palavra mais repitida no texto.

// Cria um algoritmo que diz qual a palavra mais repetida dentro da seguinte texto:

// Utilize laços de repetição e estrutura de dados `Map` pra descobrir quanto cada palavra foi repetida e depois verificar qual delas foi mais repetidas.



// const texto = 'Ut interdum tellus sit amet arcu viverra facilisis. Mauris diam magna, condimentum ac justo nec, rhoncus iaculis odio. Sed tincidunt lacus ut risus laoreet sagittis. Curabitur tristique egestas libero, nec vulputate ligula pellentesque auctor. Mauris vitae est lacinia, condimentum felis eget, consequat eros. Proin tempor ligula felis, sit amet malesuada purus viverra sit amet. Nunc lobortis porta est a mattis. Curabitur congue tincidunt velit eu placerat. Aliquam sed urna pretium, laoreet ante nec, ultrices eros. Sed ullamcorper elit id dolor congue fringilla. Aenean fringilla sed risus ac consequat. Mauris turpis leo, volutpat eget varius sit amet, fermentum id lectus. Nunc quis gravida neque. Nulla eleifend risus diam, ut dictum mauris lobortis ut. Donec vitae nisi ullamcorper turpis accumsan malesuada a id mauris. Vestibulum aliquet tellus id purus consequat, eget vehicula erat porttitor. In hac habitasse platea dictumst. Nunc semper faucibus enim sit amet tristique. Quisque egestas, massa luctus laoreet porttitor, eros lorem semper enim, sed mattis turpis justo ut est. Proin ac elit tincidunt, lacinia est nec, ultrices purus. Quisque sem dui, commodo a dui consectetur, posuere accumsan orci. Maecenas luctus, nibh ac molestie ornare, mi odio placerat metus, vitae ornare lorem lectus a erat. Maecenas imperdiet, dui nec tincidunt sollicitudin, orci velit efficitur tortor, id interdum odio nibh nec sapien.'


// let palavras = texto.split(" "); //SPLIT server para transformar as palavras da string em uma matriz, se remover o espaço dentro do split ele pega letra por letra
// let contador = new Map();

// for (let i = 0; i < palavras.length; i++) {
//     const palavra = palavras[i];
//     if(contador.has(palavra)) {
    //         contador.set(palavra, contador.get(palavra) + 1);
    //     } else {
//         contador.set(palavra, 1);
//     }
//     console.log({ contador });
// }





// 6. Procurando melhor aluno da escola

// Dada a escola a seguir, cria um algoritmo que encontre qual o aluno que teve a melhor nota do ano:

// Ao encontrar o aluno com a melhor média, printar o nome e a idade.

// Bonus: printar o nome + idade + ano escolar.


const escola = {
    primeiroAno: [
        { nome: "Ana Clara", idade: 7, notas: [8, 9, 7, 10] },
        { nome: "Lucas Gabriel", idade: 7, notas: [7, 6, 8, 9] },
        { nome: "Mariana Silva", idade: 7, notas: [10, 9, 8, 10] },
        { nome: "João Pedro", idade: 7, notas: [6, 7, 7, 8] },
        { nome: "Isabela Costa", idade: 7, notas: [9, 8, 9, 10] },
        { nome: "Rafael Lima", idade: 7, notas: [8, 7, 7, 9] },
        { nome: "Gabriela Souza", idade: 7, notas: [7, 6, 8, 8] },
        { nome: "Miguel Alves", idade: 7, notas: [10, 9, 8, 9] }
    ],
    segundoAno: [
        { nome: "Pedro Henrique", idade: 8, notas: [6, 7, 7, 8] },
        { nome: "Julia Maria", idade: 8, notas: [9, 10, 9, 10] },
        { nome: "Rafael Augusto", idade: 8, notas: [8, 7, 8, 9] },
        { nome: "Carla Beatriz", idade: 8, notas: [7, 6, 7, 8] },
        { nome: "Fernando José", idade: 8, notas: [8, 9, 7, 9] },
        { nome: "Camila Oliveira", idade: 8, notas: [9, 10, 8, 9] },
        { nome: "Vinícius Almeida", idade: 8, notas: [7, 7, 8, 8] },
        { nome: "Sofia Santos", idade: 8, notas: [10, 9, 10, 10] }
    ],
    terceiroAno: [
        { nome: "Carla Fernanda", idade: 9, notas: [8, 9, 7, 10] },
        { nome: "Bruno Ricardo", idade: 9, notas: [7, 6, 8, 9] },
        { nome: "Fernanda Lima", idade: 9, notas: [10, 9, 8, 10] },
        { nome: "Thiago Azevedo", idade: 9, notas: [6, 7, 6, 8] },
        { nome: "Laura Melo", idade: 9, notas: [9, 8, 9, 10] },
        { nome: "Felipe Nunes", idade: 9, notas: [8, 8, 7, 9] },
        { nome: "Isabel Cristina", idade: 9, notas: [7, 6, 7, 8] },
        { nome: "Guilherme Borges", idade: 9, notas: [10, 9, 8, 9] }
    ],
    quartoAno: [
        { nome: "Tiago Matos", idade: 10, notas: [6, 7, 6, 8] },
        { nome: "Gabriela Costa", idade: 10, notas: [9, 10, 8, 10] },
        { nome: "Felipe Silva", idade: 10, notas: [8, 8, 7, 9] },
        { nome: "Larissa Campos", idade: 10, notas: [7, 6, 7, 8] },
        { nome: "Leonardo Mendes", idade: 10, notas: [9, 9, 8, 9] },
        { nome: "Bruna Ferreira", idade: 10, notas: [8, 7, 8, 8] },
        { nome: "Caio Figueira", idade: 10, notas: [7, 8, 9, 7] },
        { nome: "Daniel Rocha", idade: 10, notas: [10, 9, 10, 10] }
    ],
    quintoAno: [
        { nome: "Laura Pereira", idade: 11, notas: [10, 9, 8, 10] },
        { nome: "João Paulo", idade: 11, notas: [7, 7, 8, 9] },
        { nome: "Isabela Costa", idade: 11, notas: [9, 8, 10, 9] },
        { nome: "Mariana Lopes", idade: 11, notas: [8, 9, 7, 9] },
        { nome: "Henrique Andrade", idade: 11, notas: [7, 6, 8, 8] },
        { nome: "Letícia Barbosa", idade: 11, notas: [9, 10, 9, 10] },
        { nome: "Rafaela Martins", idade: 11, notas: [8, 7, 7, 9] },
        { nome: "Gustavo Almeida", idade: 11, notas: [10, 9, 8, 10] }
    ],
    sextoAno: [
        { nome: "Lucas Fernandes", idade: 12, notas: [6, 7, 8, 7] },
        { nome: "Sophia Rodrigues", idade: 12, notas: [10, 9, 8, 10] },
        { nome: "Miguel Souza", idade: 12, notas: [8, 8, 7, 9] },
        { nome: "Nicole Almeida", idade: 12, notas: [7, 7, 8, 9] },
        { nome: "Rafael Costa", idade: 12, notas: [9, 8, 7, 8] },
        { nome: "Mariana Oliveira", idade: 12, notas: [8, 9, 9, 10] },
        { nome: "Gabriel Santos", idade: 12, notas: [7, 6, 8, 8] },
        { nome: "Isabela Cardoso", idade: 12, notas: [10, 10, 9, 10] }
    ],
    setimoAno: [
        { nome: "Maria Clara", idade: 13, notas: [9, 9, 8, 10] },
        { nome: "Carlos Eduardo", idade: 13, notas: [7, 6, 8, 7] },
        { nome: "Fernanda Souza", idade: 13, notas: [10, 9, 9, 10] },
        { nome: "Tiago Silva", idade: 13, notas: [8, 7, 7, 8] },
        { nome: "Beatriz Santos", idade: 13, notas: [9, 10, 9, 10] },
        { nome: "João Vitor", idade: 13, notas: [7, 6, 8, 8] },
        { nome: "Eduardo Almeida", idade: 13, notas: [8, 9, 7, 9] },
        { nome: "Camila Ribeiro", idade: 13, notas: [10, 9, 8, 9] }
    ],
    oitavoAno: [
        { nome: "Amanda Silva", idade: 14, notas: [8, 8, 9, 7] },
        { nome: "Gustavo Ribeiro", idade: 14, notas: [6, 7, 8, 8] },
        { nome: "Bruna Oliveira", idade: 14, notas: [10, 9, 10, 10] },
        { nome: "Luana Costa", idade: 14, notas: [9, 8, 9, 9] },
        { nome: "Henrique Souza", idade: 14, notas: [7, 7, 8, 8] },
        { nome: "Manuela Santos", idade: 14, notas: [8, 9, 9, 10] },
        { nome: "Vinícius Costa", idade: 14, notas: [6, 6, 7, 7] },
        { nome: "Mariana Lima", idade: 14, notas: [10, 9, 10, 10] }
    ],
    nonoAno: [
		    { nome: "Leonardo Rocha", idade: 15, notas: [9, 10, 8, 10] },
		    { nome: "Luana Ribeiro", idade: 15, notas: [7, 7, 8, 9] },
		    { nome: "Victor Silva", idade: 15, notas: [8, 8, 9, 10] },
		    { nome: "Isabel Almeida", idade: 15, notas: [4, 5, 7, 1] },
		    { nome: "Matheus Costa", idade: 15, notas: [9, 8, 7, 10] },
		    { nome: "Julia Santos", idade: 15, notas: [8, 9, 9, 9] },
		    { nome: "Thiago Oliveira", idade: 15, notas: [7, 6, 8, 7] },
		    { nome: "Carolina Fernandes", idade: 15, notas: [10, 9, 8, 10] }
		]
	};



    const scoreCounter = new Map(); // Map para salvar a chave aluno com valor da média

    for (var turma in escola) {
    // laço no objeto escola

    for (let i = 0; i < escola[turma].length; i++) {
        // laço na lista turma

        let soma = 0;
        for (let n = 0; n < escola[turma][i].notas.length; n++) {
        // laço nas notas do aluno
        soma += escola[turma][i].notas[n];
        }

        const nome = escola[turma][i].nome;
        const idade = escola[turma][i].idade;
        const media = Number((soma / escola[turma][i].notas.length).toFixed(1));

        scoreCounter.set(nome, {
        media,
        idade,
        turma,
        }); //salvando no Map o nome e media do aluno
    }
    }

    let maxValue = {
    media: 0,
    nome: "",
    turma: "",
    idade: 0,
    };

    for (const [key, value] of scoreCounter) {
    // laço no Map para verificar qual a maior média
    if (value.media > maxValue.media) {
        maxValue = {
        nome: key,
        media: value.media,
        turma: value.turma,
        idade: value.idade,
        };
    }
    }

    console.log(maxValue);