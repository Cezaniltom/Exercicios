// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

const setOpt = prompt(
    'Digite a opção desejada ',
    console.log('1 - Visualizar'),
    console.log('2 - Editar'),
    console.log('3 - Excluir'))

switch(setOpt) {
    case '1':
        return console.log('\n 1 - Visualizando dados')
        break
    case '2':
        return console.log('\n 2 - Editando dados')
        break
    case '3':
        return console.log('\n 3 - Apagando dados')
        break
    default:
        return console.log('Valor inválido')
}