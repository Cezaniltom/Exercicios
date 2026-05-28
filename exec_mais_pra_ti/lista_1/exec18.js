// 18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

const dados = {
  id: 10,
  nome: 'Cezaniltom',
  cidade: 'Cascavel',
  telefones: ['8599999999', '8588888888'],
  idade: 27,
  linguagens: ['JavaScript', 'Nodejs', 'Java']
}

function filtrarArrays(objeto) {
  let novoObjeto = {}

  for (let chave in objeto) {
    if (Array.isArray(objeto[chave])) {
      novoObjeto[chave] = objeto[chave]
    }
  }

  return novoObjeto
}

const propriedadesArrays = filtrarArrays(dados)
console.log(propriedadesArrays)