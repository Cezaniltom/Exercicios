Existem 3 formas de declarar o useEffect:

// A primeira forma é passando uma função
//Executado toda vez que o componente renderiza na tela
// Toda vez que o valor da variavel atribuida a função auterar seu valor, todos os componentes da tela devem renderizar novamente
useEffect(() => {
    console.log('useEffect sempre que renderiza', Date.now())
})


// A segunda forma é passando com um array vazio no segundo parametro (array de dependencias)
// Executa apenas quando o React monta o componente na tela pela primeira vez
// Util quando for buscar os dados de uma API externa
useEffect(() => {
    console.log('useEffect com array deps vazio', Date.now())
}, [])


// A terceira forma é passando uma dependencia qualquer
// Executa apenas quando o valor do primeiro valor do useState muda
// Ver spbre a função de cleanUp
useEffect(() => {
    console.log('Valor mudou', Date.now())
}, [teste])

No array de dependencia qualquer, a função do useEffect só será executada por conta da dependencia. (no nosso exemplo estamos usando a palavra TESTE)

