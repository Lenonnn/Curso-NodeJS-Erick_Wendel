
// Importa método interno do js que permite a leitura de algum dado de determinado modulo
const { readFile, writeFile } = require('fs')

//Converte para PROMISSE
const { promisify } = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {    
    constructor(){
        // Outra forma de obter dados .json
        // const dadosJson = require('./herois.json')
        this.NOME_ARQUIVO = 'herois.json' //Arquivo Criado
    }

    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
 
    }

    async escreverArquivos(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true;
    }

    async cadastrarHeroi(heroi){
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now()

        const heroiComId = {
            ...heroi,
            id,
        }
        const dadosFinal = [
            ...dados,
            heroiComId
        ]

        const resultado = await this.escreverArquivos(dadosFinal)
        return resultado


    }


    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id): true))
        return dadosFiltrados
    }

    async remover(id) {
        if (!id) {
            return await this.escreverArquivos([])
        }

        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if (indice === -1) {
            throw Error('O heroi informado não existe')
        }
        
        dados.splice(indice, 1)
        await this.escreverArquivos(dados)
        return true;
    }


    async atualizar(id, modificacoes) {
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id));
        if (indice === -1) {
            throw Error('Heroi informado não existe ainda')
        }

        const atual = dados[indice]
        dados.splice(indice, 1)

        const objetoAtualizar = {
            ...atual,
            ...modificacoes
        }
        
        return await this.escreverArquivos([
            ...dados,
            objetoAtualizar
        ])
    }

}

// Exporta para permitir acesso a todos os modulos da instancia
// Quem usar esse arquivos pode usar . para obter os objetos
// Sem precisar instanciar // Exemplo -> Database().

module.exports = new Database()