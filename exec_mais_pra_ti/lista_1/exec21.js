// 21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

const vendas = [
  { vendedor: 'Alice', valor: 150 },
  { vendedor: 'Bob', valor: 200 },
  { vendedor: 'Alice', valor: 50 },
  { vendedor: 'Carlos', valor: 300 },
  { vendedor: 'Bob', valor: 100 }
]

function sumarizarVendas(arrayVendas) {
  let totais = {}

  for (let venda of arrayVendas) {
    if (totais[venda.vendedor]) {
      totais[venda.vendedor] += venda.valor
    } else {
      totais[venda.vendedor] = venda.valor
    }
  }

  return totais
}

console.log(sumarizarVendas(vendas))