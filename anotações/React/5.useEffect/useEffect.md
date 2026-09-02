Existem 3 formas de declarar o useEffect:

// A primeira forma é passando uma função
useEffect(() => {
    console.log('', Date.now())
})


// A segunda forma é passando com um array vazio no segundo parametro (array de dependencias)
useEffect(() => {
    console.log('', Date.now())
}, [])


// A terceira forma é passando uma dependencia qualquer
useEffect(() => {
    console.log('', Date.now())
}, [teste])

No array de dependencia qualquer, a função do useEffect só será executada por conta da dependencia. (no nosso exemplo estamos usando a palavra TESTE)