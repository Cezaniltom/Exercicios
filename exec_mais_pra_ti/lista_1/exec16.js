// 16. Dada uma matriz m[1..6,1..8], criar um vetor c que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de m.

let m = []
let c = []

for (let i = 0; i < 6; i++) {
  let linha = []
  for (let j = 0; j < 8; j++) {
    let numeroAleatorio = math.floor(math.random() * 21) - 10
    linha.push(numeroAleatorio)
  }
  m.push(linha)
}

for (let i = 0; i < m.length; i++) {
  let quantidadeNegativos = 0

  for (let j = 0; j < m[i].length; j++) {
    if (m[i][j] < 0) {
      quantidadeNegativos++
    }
  }

  c.push(quantidadeNegativos)
}

console.log('--- matriz m (6x8) gerada ---')
for (let i = 0; i < m.length; i++) {
  console.log(`Linha ${i + 1}: \t${m[i].join('\t')}`)
}

console.log('\n--- Vetor c (Negativos por linha) ---')
for (let i = 0; i < c.length; i++) {
  console.log(`A linha ${i + 1} possui ${c[i]} números negativos.`)
}