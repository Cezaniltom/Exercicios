//Encontrando e removendo um item de um array pela sua posição

const techs = ['html', 'css', 'js', 'nodejs', 'SQL']

let index = techs.indexOf('js')
techs.splice(index, 1)

console.log(techs)