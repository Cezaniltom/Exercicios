function retornaFuncao() {
    const nome = 'Cezaniltom';
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao)