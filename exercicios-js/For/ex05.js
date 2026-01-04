// Exercício 5:

const notas = [
    [17, 28, 11],
    [46, 39, 44],
    [35, 57, 44],
    [48, 39, 88]
  ];
  
  let soma = 0;
  let quantidade = 0;
  
  for (let i = 0; i < notas.length; i++) { // linhas 
    for (let j = 0; j < notas[i].length; j++) { // colunas 
        console.log(notas[i][j])
        soma += notas[i][j];
        quantidade++;
      } 
      break;
  }
  
  let media = soma / quantidade;
  
  console.log(media)