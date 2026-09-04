# Hook useEffect

O `useEffect` serve para lidar com Efeitos Colaterais (Side Effects). Ele executa ações baseadas em algo que o React está monitorando ou em interações com o "mundo exterior" (como chamadas de API, temporizadores ou interações diretas com o navegador).

## As 3 formas de declarar o useEffect

### 1. Sem array de dependências (Apenas a função)
Neste formato, o código é executado toda vez que o componente renderiza na tela. Ou seja, toda vez que o valor de um estado alterar seu valor e causar uma re-renderização, este efeito rodará novamente.

**Exemplo:**
```javascript
useEffect(() => {
    console.log('useEffect sempre que renderiza', Date.now());
});
```

### 2. Com um array vazio no segundo parâmetro
Nesta forma, o código executa apenas quando o React monta o componente na tela pela **primeira vez**. É extremamente útil quando você precisa buscar os dados de uma API externa logo no carregamento inicial da página.

**Exemplo:**
> Esse array `[]` é chamado de array de dependência. Nesse exemplo, o array de dependência é vazio.

```javascript
useEffect(() => {
    console.log('useEffect com array de deps vazio', Date.now());
}, []);
```

### 3. Com uma dependência no array
Aqui, o código executa na primeira vez que a tela carregar e **sempre que o valor da dependência mudar**. No array de dependências, a função do `useEffect` só será executada por conta dessa variável. Vale lembrar que essa dependência não precisa ser apenas um valor do `useState`; pode ser uma propriedade (`prop`) que o componente recebeu de fora ou uma variável externa.

**Exemplo (usando a dependência "teste"):**
```javascript
useEffect(() => {
    console.log('Valor mudou', Date.now());
}, [teste]);
```

---

## A Função de CleanUp (Limpeza)

O CleanUp é uma função que você retorna dentro do `useEffect`. Ele serve para "limpar a sujeira" que o seu efeito causou antes que o componente suma da tela ou antes que o efeito rode novamente. Isso é fundamental para evitar vazamentos de memória (*memory leaks*).

Deve-se usar o CleanUp sempre que o seu `useEffect` iniciar algo que fica rodando de forma contínua em segundo plano, como:
* Temporizadores (`setTimeout` e `setInterval`).
* Escuta de eventos do navegador (como monitorar cliques globais ou a rolagem da tela).
* Conexões abertas com bancos de dados.

**Exemplo de CleanUp na prática:**
```javascript
useEffect(() => {
    // 1. O efeito começa a rodar (ex: inicia um cronômetro)
    const timer = setInterval(() => {
        console.log("Executando a cada 1 segundo...");
    }, 1000);

    // 2. A função de CleanUp (O retorno)
    // O React vai rodar isso aqui ANTES de destruir o componente
    // ou ANTES de rodar esse useEffect de novo.
    return () => {
        clearInterval(timer); // Limpa o cronômetro para ele não ficar rodando invisível
        console.log("Limpeza concluída!");
    };
}, []);
```