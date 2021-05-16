const service = require('./service')

// criando uma implementação de MAP
Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for( let indice = 0; indice <= this.length - 1; indice++ ){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}

async function main(){
    try{
        const results = await service.obterPessoas('a')
        // 1º forma de conseguir os resultados
        // const names = []
        // results.results.forEach( function(item){
        //     names.push(item.name)
        // })         

        // 2º forma de conseguuir os resultados
        // const names = results.results.map(function(pessoa){
        //     return pessoa.name
        // })

        // 3º forma de conseguuir os resultados
        // const names = results.results.map((pessoa) => pessoa.name)

        // 4º forma de conseguuir os resultados usando a mina própria implementação de MAP
        const names = results.results.meuMap(function(pessoa, indice){
            
            return `[${indice}]${pessoa.name}`

        })

        console.log('names',names)
    }
    catch(error) {
        console.log('Deu Erro', error)
    }

}
main( )