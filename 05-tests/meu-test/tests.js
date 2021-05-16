// Instalmos as dependencias do axios
// Chamamos o módulo de asserção para testar
const assert = require('assert')
// Linhas de teste inciais
//assert.ok(true)  // Não acontece nada
//assert.ok(false) // Avisa que a asserção não passou no primeiro teste


// Acessamos o pacote serviço que entrega os dados do serviço que vai ser consumido
const {
    obterPessoas
} = require('./service')

// instalamos o pacote nock, para simular requisições
const nock = require('nock')

describe('Star Wars Tests', function(){
    this.beforeAll(() => {
        const response =  {
            count: 1,
            next: null,
            previous: null,
            results: [{
                name: 'R2-D2',
                height: '96',
                mass: '32',
                hair_color: 'n/a',
                skin_color: 'white, blue',
                eye_color: 'red',
                birth_year: '33BBY',
                gender: 'n/a',
                homeworld: 'https://swapi.co/api/planets/8/',
                vehicles: [],
                starships: [],
                created: '2014-12-10T15:11:50.376000Z',
                edited: '2014-12-20T21:17:50.311000Z',
                url: 'https://swapi.co/api/people/3/'
            }]
        }

        nock('https://swapi.co/api/people')
        .get('/?search=r2-d2&format=json')
        .reply(200, response)

    
    })
    
    it('deve buscar r2d2 com o formato correto', async() =>{
        const expected = [{ 
            nome: 'R2-D2', 
            peso: '96' 
        }]
        const nomeBase = `r2-d2`
        const resultado = await obterPessoas(nomeBase)
        assert.deepEqual(resultado, expected)
    })
})