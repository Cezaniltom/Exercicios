// 1. Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

const prompt = require("prompt-sync")();

class Produto {
    constructor(nome, preco, categoria, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    exibirPropriedades() {
        for (let propriedade in this) {
            console.log(`${propriedade}: ${this[propriedade]}`);
        }
    }

    adicionarDesconto(percentualDesconto) {
        this.desconto = percentualDesconto;
    }

    calcularPrecoFinal() {
        if (this.desconto) {
            const valorDesconto = this.preco * (this.desconto / 100);
            return this.preco - valorDesconto;
        }
        return this.preco;
    }
}

const nomeProduto = prompt("Digite o nome do produto: ");
const precoProduto = parseFloat(prompt("Digite o preço do produto: "));
const categoriaProduto = prompt("Digite a categoria do produto: ");
const quantidadeProduto = parseInt(
    prompt("Digite a quantidade em estoque: "),
    10,
);

const produtoInstanciado = new Produto(
    nomeProduto,
    precoProduto,
    categoriaProduto,
    quantidadeProduto,
);

console.log("Propriedades do Produto:");
produtoInstanciado.exibirPropriedades();

const percentualDesconto = parseFloat(
    prompt("Digite o percentual de desconto: "),
);
produtoInstanciado.adicionarDesconto(percentualDesconto);

console.log(
    `Preço final com desconto: ${produtoInstanciado.calcularPrecoFinal()}`,
);

// 2. Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

const prompt = require("prompt-sync")();

class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    calcularPoderTotal() {
        return this.vida + this.ataque + this.defesa;
    }

    static criarViaPrompt(numeroIdentificador) {
        console.log(`Registro do Personagem ${numeroIdentificador}`);
        const nome = prompt("Nome do personagem: ");
        const vida = parseFloat(prompt(`Pontos de vida de ${nome}: `));
        const ataque = parseFloat(prompt(`Poder de ataque de ${nome}: `));
        const defesa = parseFloat(prompt(`Poder de defesa de ${nome}: `));

        return new Personagem(nome, vida, ataque, defesa);
    }
}

const personagem1 = Personagem.criarViaPrompt(1);
const personagem2 = Personagem.criarViaPrompt(2);

console.log("Comparação de Atributos Lado a Lado:");
console.log("Atributo   | Personagem 1    | Personagem 2");

for (let propriedade in personagem1) {
    const nomePropriedade = propriedade.padEnd(10);
    const valorPersonagem1 = String(personagem1[propriedade]).padEnd(15);
    const valorPersonagem2 = String(personagem2[propriedade]);

    console.log(
        `${nomePropriedade} | ${valorPersonagem1} | ${valorPersonagem2}`,
    );
}

const poderTotal1 = personagem1.calcularPoderTotal();
const poderTotal2 = personagem2.calcularPoderTotal();

console.log("\nResultado do Poder Total:");
console.log(`${personagem1.nome}: ${poderTotal1}`);
console.log(`${personagem2.nome}: ${poderTotal2}`);

if (poderTotal1 > poderTotal2) {
    console.log(`O vencedor é ${personagem1.nome} com maior poder total!`);
} else if (poderTotal2 > poderTotal1) {
    console.log(`O vencedor é ${personagem2.nome} com maior poder total!`);
} else {
    console.log("Temos um empate! Ambos possuem o mesmo poder total.");
}

// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
// experiência. Use for...in para listar todos os dados. Com base nos anos de
// experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
// anos = 10%, acima de 5 anos = 15%.

const prompt = require("prompt-sync")();

class Funcionario {
    constructor(nome, cargo, salario, anosExperiencia) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.anosExperiencia = anosExperiencia;
    }

    listarDados() {
        console.log();
        console.log("--- Dados do Funcionário ---");
        for (let dado in this) {
            console.log(`${dado}: ${this[dado]}`);
        }
    }

    calcularBonus() {
        let percentual = 0;

        if (this.anosExperiencia <= 2) {
            percentual = 0.05;
        } else if (this.anosExperiencia >= 3 && this.anosExperiencia <= 5) {
            percentual = 0.1;
        } else if (this.anosExperiencia > 5) {
            percentual = 0.15;
        }

        const valorBonus = this.salario * percentual;
        return valorBonus;
    }
}

const nomeFuncionario = prompt("Digite o nome do funcionário: ");
const cargoFuncionario = prompt("Digite o cargo: ");
const salarioFuncionario = parseFloat(prompt("Digite o salário: "));
const anosFuncionario = parseInt(prompt("Digite os anos de experiência: "), 10);

const colaborador = new Funcionario(
    nomeFuncionario,
    cargoFuncionario,
    salarioFuncionario,
    anosFuncionario,
);

colaborador.listarDados();

console.log();
console.log(
    `Valor do bônus anual calculado: R$ ${colaborador.calcularBonus().toFixed(2)}`,
);

// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
// no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
// listar o inventário completo. Permita que o usuário informe um item para usar:
// reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

const prompt = require("prompt-sync")();

class Inventario {
    constructor() {
        this.itens = {
            espada: 1,
            pocao: 5,
            escudo: 2,
        };
    }

    listarInventario() {
        console.log();
        console.log("--- Inventário Atual ---");
        for (let item in this.itens) {
            console.log(`${item}: ${this.itens[item]}`);
        }
    }

    usarItem(nomeItem) {
        console.log();
        if (this.itens[nomeItem] !== undefined) {
            if (this.itens[nomeItem] > 0) {
                this.itens[nomeItem] -= 1;
                console.log(
                    `Você usou: ${nomeItem}. Quantidade restante: ${this.itens[nomeItem]}`,
                );
            } else {
                console.log(`Aviso: O item '${nomeItem}' está esgotado!`);
            }
        } else {
            console.log(`Item '${nomeItem}' não existe no inventário.`);
        }
    }
}

const inventarioJogador = new Inventario();

inventarioJogador.listarInventario();

console.log();
const itemDesejado = prompt("Digite o nome do item que deseja usar: ");
inventarioJogador.usarItem(itemDesejado);

inventarioJogador.listarInventario();

// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor
// planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

class Orcamento {
    constructor() {
        this.categorias = {
            alimentacao: { planejado: 800, gasto: 950 },
            transporte: { planejado: 300, gasto: 280 },
            lazer: { planejado: 400, gasto: 400 },
            saude: { planejado: 200, gasto: 150 },
        };
    }

    analisarCategorias() {
        console.log();
        console.log("--- Análise de Orçamento por Categoria ---");

        let saldoGeral = 0;

        for (let chave in this.categorias) {
            const categoria = this.categorias[chave];
            const diferenca = categoria.planejado - categoria.gasto;
            saldoGeral += diferenca;

            if (diferenca > 0) {
                console.log(
                    `${chave}: Dentro do orçamento. Sobrou R$ ${diferenca.toFixed(2)}`,
                );
            } else if (diferenca < 0) {
                console.log(
                    `${chave}: Acima do orçamento. Passou R$ ${Math.abs(diferenca).toFixed(2)}`,
                );
            } else {
                console.log(`${chave}: Exatamente no limite do orçamento.`);
            }
        }

        return saldoGeral;
    }
}

const meuOrcamento = new Orcamento();
const saldoMensal = meuOrcamento.analisarCategorias();

console.log();
console.log("--- Balanço Final ---");
if (saldoMensal >= 0) {
    console.log(`Saldo geral positivo: R$ ${saldoMensal.toFixed(2)}`);
} else {
    console.log(`Saldo geral negativo: R$ ${saldoMensal.toFixed(2)}`);
}

// 6. Crie um array de objetos representando músicas, cada uma com título, artista e
// duração em segundos. Use for...of para exibir cada música no formato "Artista —
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
// mesmo formato.

class Musica {
    constructor(titulo, artista, duracaoSegundos) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracaoSegundos = duracaoSegundos;
    }
}

class Playlist {
    constructor() {
        this.faixas = [];
    }

    adicionarMusica(musica) {
        this.faixas.push(musica);
    }

    formatarTempo(segundosTotais) {
        const minutos = Math.floor(segundosTotais / 60);
        const segundos = segundosTotais % 60;
        const minutosFormatados = String(minutos).padStart(2, "0");
        const segundosFormatados = String(segundos).padStart(2, "0");
        return `${minutosFormatados}:${segundosFormatados}`;
    }

    exibirPlaylist() {
        console.log();
        console.log("--- Lista de Reprodução ---");
        for (let musica of this.faixas) {
            const tempoFormatado = this.formatarTempo(musica.duracaoSegundos);
            console.log(
                `${musica.artista} - ${musica.titulo} (${tempoFormatado})`,
            );
        }
    }

    calcularDuracaoTotal() {
        let totalSegundos = 0;
        this.faixas.forEach((musica) => {
            totalSegundos += musica.duracaoSegundos;
        });

        console.log();
        console.log(
            `Duração total da playlist: ${this.formatarTempo(totalSegundos)}`,
        );
    }
}

const minhaPlaylist = new Playlist();
minhaPlaylist.adicionarMusica(new Musica("Bohemian Rhapsody", "Queen", 354));
minhaPlaylist.adicionarMusica(
    new Musica("Stairway to Heaven", "Led Zeppelin", 482),
);
minhaPlaylist.adicionarMusica(new Musica("Hotel California", "Eagles", 390));

minhaPlaylist.exibirPlaylist();
minhaPlaylist.calcularDuracaoTotal();

// 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
// cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
// forEach para calcular e exibir separadamente a média dos aprovados e a média
// dos reprovados.

class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

class SistemaNotas {
    constructor() {
        this.alunos = [];
    }

    matricular(aluno) {
        this.alunos.push(aluno);
    }

    processarResultados() {
        let somaAprovados = 0;
        let contagemAprovados = 0;
        let somaReprovados = 0;
        let contagemReprovados = 0;

        console.log();
        console.log("--- Classificação dos Alunos ---");

        for (let aluno of this.alunos) {
            let status = "";
            if (aluno.nota >= 7) {
                status = "Aprovado";
            } else if (aluno.nota >= 5) {
                status = "Recuperação";
            } else {
                status = "Reprovado";
            }
            console.log(
                `${aluno.nome}: Nota ${aluno.nota} - Status: ${status}`,
            );
        }

        this.alunos.forEach((aluno) => {
            if (aluno.nota >= 7) {
                somaAprovados += aluno.nota;
                contagemAprovados++;
            } else if (aluno.nota < 5) {
                somaReprovados += aluno.nota;
                contagemReprovados++;
            }
        });

        console.log();
        console.log("--- Médias Gerais ---");

        if (contagemAprovados > 0) {
            const mediaAprovados = somaAprovados / contagemAprovados;
            console.log(`Média dos Aprovados: ${mediaAprovados.toFixed(2)}`);
        }

        if (contagemReprovados > 0) {
            const mediaReprovados = somaReprovados / contagemReprovados;
            console.log(`Média dos Reprovados: ${mediaReprovados.toFixed(2)}`);
        }
    }
}

const sistemaTurma = new SistemaNotas();
sistemaTurma.matricular(new Aluno("Carlos", 8.5));
sistemaTurma.matricular(new Aluno("Ana", 4.0));
sistemaTurma.matricular(new Aluno("Pedro", 6.0));
sistemaTurma.matricular(new Aluno("Maria", 9.2));
sistemaTurma.matricular(new Aluno("João", 3.5));
sistemaTurma.matricular(new Aluno("Lucas", 7.0));

sistemaTurma.processarResultados();

// 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
// Use forEach para calcular o valor total em estoque de cada produto (preço ×
// quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
// estoque.

class ProdutoEstoque {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class GerenciadorEstoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    gerarRelatorio() {
        let valorTotalGeral = 0;

        console.log();
        console.log("--- Relatório Detalhado de Estoque ---");

        this.produtos.forEach((produto) => {
            const valorItem = produto.preco * produto.quantidade;
            valorTotalGeral += valorItem;
            console.log(
                `Produto: ${produto.nome} | Preço Unitário: R$ ${produto.preco.toFixed(2)} | Quantidade: ${produto.quantidade} | Valor Total: R$ ${valorItem.toFixed(2)}`,
            );
        });

        console.log();
        console.log("--------------------------------------");
        console.log(
            `Valor Total Acumulado no Estoque: R$ ${valorTotalGeral.toFixed(2)}`,
        );
    }
}

const meuEstoque = new GerenciadorEstoque();
meuEstoque.adicionarProduto(new ProdutoEstoque("Teclado Mecânico", 250.0, 15));
meuEstoque.adicionarProduto(new ProdutoEstoque("Mouse Gamer", 150.0, 20));
meuEstoque.adicionarProduto(new ProdutoEstoque("Cadeira Ergonômica", 800.0, 5));

meuEstoque.gerarRelatorio();

// 9. Crie um array de objetos onde cada objeto representa um contato com nome,
// telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
// buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
// uma mensagem de "não encontrado".

const prompt = require("prompt-sync")();

class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    listarContatos() {
        console.log();
        console.log("--- Lista de Contatos Salvos ---");
        this.contatos.forEach((contato) => {
            console.log(
                `Nome: ${contato.nome.padEnd(15)} | Tel: ${contato.telefone.padEnd(15)} | E-mail: ${contato.email}`,
            );
        });
    }

    buscarContato(nomeBusca) {
        console.log();
        console.log(`--- Buscando por: ${nomeBusca} ---`);
        let encontrado = false;

        for (let contato of this.contatos) {
            if (contato.nome.toLowerCase() === nomeBusca.toLowerCase()) {
                console.log("Contato Localizado!");
                console.log(`Nome: ${contato.nome}`);
                console.log(`Telefone: ${contato.telefone}`);
                console.log(`E-mail: ${contato.email}`);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("Mensagem: Contato não encontrado na base de dados.");
        }
    }
}

const agendaPessoal = new Agenda();
agendaPessoal.adicionarContato(
    new Contato("Alice Silva", "11988887777", "alice@email.com"),
);
agendaPessoal.adicionarContato(
    new Contato("Bruno Costa", "21977776666", "bruno@email.com"),
);
agendaPessoal.adicionarContato(
    new Contato("Carla Dias", "31966665555", "carla@email.com"),
);

agendaPessoal.listarContatos();

console.log();
const nomePesquisa = prompt("Digite o nome do contato que deseja buscar: ");
agendaPessoal.buscarContato(nomePesquisa);

// 10. Implemente uma pilha usando um array para simular o histórico de um
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
// cada operação.

class HistoricoNavegador {
    constructor() {
        this.paginas = [];
    }

    visitar(pagina) {
        this.paginas.push(pagina);
        console.log();
        console.log(`Ação: Visitando a página '${pagina}'`);
    }

    voltar() {
        console.log();
        if (this.paginas.length === 0) {
            console.log(
                "Ação Negada: O histórico está vazio. Não é possível voltar.",
            );
            return;
        }
        const paginaRemovida = this.paginas.pop();
        console.log(`Ação: Voltando... Saindo da página '${paginaRemovida}'`);
    }

    paginaAtual() {
        console.log();
        if (this.paginas.length === 0) {
            console.log("Status Atual: Nenhuma página aberta.");
            return;
        }
        const topoDaPilha = this.paginas[this.paginas.length - 1];
        console.log(`Status Atual: Você está visualizando '${topoDaPilha}'`);
    }
}

const navegador = new HistoricoNavegador();

navegador.visitar("google.com");
navegador.paginaAtual();

navegador.visitar("github.com");
navegador.paginaAtual();

navegador.visitar("stackoverflow.com");
navegador.paginaAtual();

navegador.visitar("developer.mozilla.org");
navegador.paginaAtual();

navegador.voltar();
navegador.paginaAtual();

navegador.voltar();
navegador.paginaAtual();

// 11. Implemente uma fila usando um array para simular o atendimento de uma
// clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
// (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
// exibindo o estado da fila a cada operação.

class FilaClinica {
    constructor() {
        this.pacientes = [];
    }

    chegarPaciente(nome) {
        this.pacientes.push(nome);
        console.log();
        console.log(`Entrada: O paciente ${nome} chegou e pegou uma senha.`);
    }

    chamarProximo() {
        console.log();
        if (this.pacientes.length === 0) {
            console.log(
                "Aviso do Sistema: Não há pacientes aguardando atendimento.",
            );
            return;
        }
        const pacienteChamado = this.pacientes.shift();
        console.log(
            `Chamada: O paciente ${pacienteChamado} deve comparecer ao consultório.`,
        );
    }

    exibirFila() {
        console.log();
        if (this.pacientes.length === 0) {
            console.log("Status da Sala de Espera: Vazia.");
            return;
        }
        console.log("Status da Sala de Espera:");
        this.pacientes.forEach((paciente, indice) => {
            console.log(`${indice + 1}º da fila - ${paciente}`);
        });
    }
}

const clinica = new FilaClinica();

clinica.chegarPaciente("Marcos");
clinica.exibirFila();

clinica.chegarPaciente("Juliana");
clinica.exibirFila();

clinica.chegarPaciente("Roberto");
clinica.exibirFila();

clinica.chegarPaciente("Fernanda");
clinica.exibirFila();

clinica.chegarPaciente("Tiago");
clinica.exibirFila();

clinica.chamarProximo();
clinica.exibirFila();

clinica.chamarProximo();
clinica.exibirFila();

clinica.chamarProximo();
clinica.exibirFila();

// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
// funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
// exiba a lista antes e depois.

class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaTarefas {
    constructor() {
        this.cabeca = null;
    }

    adicionar(tarefa) {
        const novoNo = new No(tarefa);

        if (this.cabeca === null) {
            this.cabeca = novoNo;
        } else {
            let noAtual = this.cabeca;
            while (noAtual.proximo !== null) {
                noAtual = noAtual.proximo;
            }
            noAtual.proximo = novoNo;
        }
        console.log();
        console.log(`Registro: Tarefa '${tarefa}' inserida na lista.`);
    }

    remover(tarefaBusca) {
        console.log();
        if (this.cabeca === null) {
            console.log("Comando Rejeitado: A lista de tarefas está vazia.");
            return;
        }

        if (this.cabeca.valor === tarefaBusca) {
            this.cabeca = this.cabeca.proximo;
            console.log(
                `Execução: Tarefa '${tarefaBusca}' concluída e removida.`,
            );
            return;
        }

        let noAtual = this.cabeca;
        while (
            noAtual.proximo !== null &&
            noAtual.proximo.valor !== tarefaBusca
        ) {
            noAtual = noAtual.proximo;
        }

        if (noAtual.proximo === null) {
            console.log(`Falha: A tarefa '${tarefaBusca}' não foi localizada.`);
        } else {
            noAtual.proximo = noAtual.proximo.proximo;
            console.log(
                `Execução: Tarefa '${tarefaBusca}' concluída e removida.`,
            );
        }
    }

    exibir() {
        console.log();
        console.log("--- Lista de Tarefas Atuais ---");
        if (this.cabeca === null) {
            console.log("Nenhuma tarefa pendente.");
            return;
        }

        let noAtual = this.cabeca;
        let contador = 1;
        while (noAtual !== null) {
            console.log(`Tarefa ${contador}: ${noAtual.valor}`);
            noAtual = noAtual.proximo;
            contador++;
        }
    }
}

const blocoDeNotas = new ListaTarefas();

blocoDeNotas.adicionar("Estudar Orientação a Objetos");
blocoDeNotas.adicionar("Revisar Pilhas e Filas");
blocoDeNotas.adicionar("Resolver exercícios de JavaScript");
blocoDeNotas.adicionar("Configurar ambiente de desenvolvimento");

blocoDeNotas.exibir();

blocoDeNotas.remover("Revisar Pilhas e Filas");

blocoDeNotas.exibir();
