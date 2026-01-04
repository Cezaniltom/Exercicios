// Exercício 6:

const valores = [
    [15, 12, 18, 1],
    [14, 9, 16, 5, 2]
  ];
  
  let menorValor = valores[0][0];
  
  for (let i = 0; i < valores.length; i++) {
  
    for (let j = 0; j < valores[i].length; j++) {
  
      if (valores[i][j] < menorValor){
        menorValor = valores[i][j]
      }
    }
  }
  console.log(menorValor)