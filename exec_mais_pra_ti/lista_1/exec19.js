// 19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm
// precedência sobre as do obj1 em caso de conflitos.


const obj1 = {
  nome: 'Cezaniltom',
  idade: 27,
  cidade: 'Cascavel'
}

const obj2 = {
  idade: 27,
  profissao: 'Desenvolvedor de Software'
}

function combinarObjetos(objeto1, objeto2) {
  return { ...objeto1, ...objeto2 }
}

const objetoCombinado = combinarObjetos(obj1, obj2)

console.log(objetoCombinado)