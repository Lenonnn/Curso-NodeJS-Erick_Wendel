/* 
Acessa o JSON service
dentro da chaves recebe o valor que vai buscar dentro do service
*/
const { obterPessoas } = require('./service')

/* const item = {
    nome: Lenon,
    Idade:18
}
const { nome, idade } =  item
console.log(nome , idade )
*/

Array.prototype.meuFilter = function(callback){
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        if(!result) continue; 
        lista.push(item)
    }
    return lista;
}

async function main(){
    try{
        const {
            results
        } = await obterPessoas('a')
        // const familiaLars =  results.filter(function(item){
        // /* por padrão precisa retorna um booleano
        //     para informar se deve manter ou remover da lista
        //     false -> remove da lista
        //     true -> mantém
        //     não encontrou = -1
        //     encontrou = posição no array
        // */
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1 // essa implemtenção pega somente que for da família lars
        //     // const result = item.name.toLowerCase().indexOf('lars') === -1 // essa implemtenção todos que não forem da família lars
        //     return result
        // })

        const familiaLars = results.meuFilter((item, index, lista) => {

            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)

    }
    catch(error){
        console.error('Deu ruim', error)
    }
}
main()