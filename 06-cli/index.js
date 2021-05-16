const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')
async function main() {
    Commander
        .version('v1')
        .option('-n, --nome [value]', "Nome do heroi")
        .option('-p, --poder [value]', "Poder do heroi")
        .option('-i, --id [value]', "Id do heroi")


        .option('-c, --cadastrar', "Cadastrar um heroi")
        .option('-l, --listar', "Listar herois cadastrados")
        .option('-r, --remover [value]', "Remove herois cadastrados")
        .option('-a, --atualizar [value]', "Atualiza um heroi cadastrado")
        .parse(process.argv)
    const heroi = new Heroi(Commander)
    try {
        if(Commander.cadastrar){
            delete heroi.id

            // console.log(heroi)
            const resultado = await Database.cadastrarHeroi(heroi)
            if(!resultado){
                console.error('Heroi não foi cadastrado')
                return;
            }
            console.log('Heroi cadastrado com sucesso')
        }

        if(Commander.listar){
            const resultado = await Database.listar()
            console.log(resultado)
            return;
        }

        if(Commander.remover) {
            const resultado = await Database.remover(heroi.id)
            if(!resultado){
                console.error('Heroi não foi removido!')
                return;
            }
            console.log('Heroi removido com sucesso')
        }

        if(Commander.atualizar) {
            const idParaAtualizar = parseInt(Commander.atualizar)
            delete heroi.id;
            const dado =JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
            if(!resultado){
                console.error('Não foi possíveel atualizar o heroi')
                return;
            }
            console.log('Heroi cadastrado com sucesso')
        }
    }
    catch(error) {
        console.error('Deu ruim', error)
    }

}

main()