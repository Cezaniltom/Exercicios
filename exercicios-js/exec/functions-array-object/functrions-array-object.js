(function() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    // forma mais obsoleta
    // form.onsubmit = (e) => {
    //     e.preventDefault();
    // }

    form.addEventListener('submit', (e) => {


        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')


        // MINHA RESOLUÇÃO
        const obj = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(obj)

        resultado.innerHTML = `<p>${obj.nome},
            ${obj.sobrenome},
            ${obj.peso},
            ${obj.altura}</p>`



        // RESOLUÇÃO DO PROFESSOR
        // pessoas.push({
        //     nome: nome.value,
        //     sobrenome: sobrenome.value,
        //     peso: peso.value,
        //     altura: altura.value
        // })

        // resultado.innerHTML = `<p>${nome.value},
        //     ${sobrenome.value},
        //     ${peso.value},
        //     ${altura.value}</p>`

        e.preventDefault();
        // console.log('Formulario enviado')
    })
})()