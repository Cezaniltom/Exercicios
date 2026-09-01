# Hook useState

O `useState` basicamente serve para que, quando definirmos um valor a uma variável, e porventura mudarmos esse valor ao longo do código, todos os componentes que usarem este determinado valor alterem em conjunto.

Por convenção, sempre que iremos iniciar uma função que faz algo na tela, ela é nomeada de `handle`.

**Exemplo:**
```javascript
function handleClick() {
    // Lógica da função
}
```

Efeito colateral acontece quando o estado da variável não está sendo monitorado, alterando os valores em alguns lugares e mantendo o mesmo valor em outros.

**Exemplo:**
```javascript
export function App() {
    function handleClick() {
        let numero = 0;
        const span = document.getElementById('numero');
    
        if(!span) return;
    
        numero += 1;
        span.innerText = numero.toString();
        console.log(numero, Date.now());
    }
    
    return (
        // ...
    );
}
```

Quando for criar um hook, eles sempre começam com a palavra `use`.

Os hooks são funções, e o `useState` retorna 2 coisas:
1. Um array (no qual o primeiro valor já é configurado por inferência. Se eu adicionar um número, será `number`, se for alguma palavra, será `string`...).
2. O outro é um `React.Dispatch<React.SetStateAction<valor_inferente>>`.

Sempre que usar o `useState`, não devemos usar atribuição diretamente (`=`).

**Exemplo:**
```javascript
const [numero, setNumero] = useState(0); // Valor inicial do estado

function handleClick() {
    setNumero(numero + 1);
}
```

Onde a variável inicial (`numero`) está indicada no código, seu valor irá mudar a cada execução da função `handleClick`.

Sempre irei iniciar o segundo atributo da constante com o nome `set` seguida de camelCase. Exemplo: `setNumero`.

Sempre que usar a variável `set` (ou no exemplo: `setNumero`) e o valor dela depender do valor anterior (`numero`), deve ser usado uma função dentro dele.

**Exemplo:**
```javascript
const [numero, setNumero] = useState(0); // Valor inicial do estado
	
function handleClick() {
    // Ao invés de usar o formato abaixo
    // setNumero(numero + 1)
    
    // Deve usar isso (o estado anterior (prevState))
    setNumero((prevState) => prevState + 1);
}
```

Se eu usar o `setNumero(numero + 1)` ele não será executado imediatamente.

**Exemplo:**
```javascript
// Se eu usar o exemplo abaixo repetindo o setNumero(numero + 1)
// várias vezes, só será alterado a última chamada.

function handleClick() {
    setNumero(numero + 1);
    setNumero(numero + 1);
    setNumero(numero + 1);
    setNumero(numero + 1);
    setNumero(numero + 1);
    setNumero(numero + 1);
}
	
// O resultado será alterado de 1 em 1
```

Se eu usar o `setNumero((prevState) => prevState + 1)` mais de uma vez, igual no exemplo anterior, o resultado será diferente. Nesse caso, as repetições serão somadas de acordo com as vezes que foram repetidas.

**Exemplo da função com várias repetições:**
```javascript
// Cada chamada pega o estado imediatamente anterior na fila.

function handleClick() {
    setNumero((prevState) => prevState + 1);
    setNumero((prevState) => prevState + 1);
    setNumero((prevState) => prevState + 1);
    setNumero((prevState) => prevState + 1);
    setNumero((prevState) => prevState + 1);
}
	
// O resultado será alterando de 5 em 5
```

Podemos utilizar também o *Lazy Initialization* (inicialização preguiçosa) que é basicamente usada para operações custosas ou cálculos pesados (como ler algo do localStorage ou processar um array grande). Em vez de passar o valor direto, passamos uma função. Essa função só será executada uma única vez, na primeira renderização do componente.

**Exemplo:**
```javascript
const [numero, setNumero] = useState(() => {
    console.log('Lazy initialization');
    return 0;
});
```