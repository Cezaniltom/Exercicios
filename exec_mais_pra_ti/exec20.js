// 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
// número de vezes que a string aparece no array.

const palavras = ['maçã', 'banana', 'laranja', 'maçã', 'uva', 'banana', 'maçã']

const contagem = {}

for (let palavra of palavras) {
  if (contagem[palavra]) {
    contagem[palavra]++
  } else {
    contagem[palavra] = 1
  }
}

console.log(contagem)