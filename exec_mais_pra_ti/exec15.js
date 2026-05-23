// 15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
// principal são iguais a 1 e os demais são nulos.

let matrizIdentidade = []

for (let i = 0; i < 7; i++) {
  let linha = []

  for (let j = 0; j < 7; j++) {
    if (i === j) {
      linha.push(1)
    } else {
      linha.push(0)
    }
  }
  
  matrizIdentidade.push(linha)
}

console.log('--- Matriz Identidade 7x7 ---\n')

for (let i = 0; i < matrizIdentidade.length; i++) {
  console.log(matrizIdentidade[i].join('  '))
}