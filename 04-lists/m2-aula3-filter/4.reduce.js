const {
    obterPessoas
} = require('./service')

Array.prototype.meuReduce = function (callback, valorIncial){
    let valorFinal = typeof valorIncial !== undefined ? valorIncial : this[0]
    for( let index = 0; index <= this.length - 1 ; index++){
        valorFinal = callback(valorFinal, this[index], this)
    }
   return valorFinal;
}                                                                                            
async function main(){
    try{
        const {
            results
        } = await obterPessoas('a')
        // console.log(results.length)
        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos',pesos)
        // [20.2, 30.3, 40.5] = 0
        // Método de soma do ArrayList de JS
        // const total = pesos.reduce(( anterior, proximo) => {
        //     return anterior + proximo
        // }, 0)
        const minhaLista = [
            ['Lenon', 'ITS'],
            ['NODE', 'Nerd']
        ]
        //Método de listas do arrayList
        const total = minhaLista.meuReduce((anterior, proximo) => {
           return anterior.concat(proximo)
        }, [])
        .join(', ')
        console.log('total', total)
    }
    catch(error){
        console.error('Deu erro', error)
    }
}
main()