// Exercício 4:

const matriz = [
    [2, 4, 6],
    [3, 7, 9],
    [5, 8, 10]
  ];
  
  let produto = 0
  
  for (let i = 0; i < matriz.length; i++) {
  
    for (let j = 0; j < matriz.length; j++) {
      produto += matriz[i][j]
    }
  }
  console.log(produto)