const service = require('./service')

async function main(){
    try{
        const result = await service.obterPessoas('a')
        const names = []

        // Busca usando laço de repetição for
        console.time('for'); // Inicia busca do tempo de processamento
            for ( let i = 0; i <= result.results.length -1; i++){
                const pessoa = result.results[i]
                names.push(pessoa.name)
            }
        console.timeEnd('for')

       
        // ---------  Busca usando laço forin  -------------
        console.time('forin');
        for( let i in result.results){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin');

        // ---------  Busca usando laço forof  -------------
        console.time('forof');
        for(pessoa of result.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forof');
        console.log('names', names)

    } 
    catch (error) {
        console.error(`erro interno`,error);
    }
}
main()