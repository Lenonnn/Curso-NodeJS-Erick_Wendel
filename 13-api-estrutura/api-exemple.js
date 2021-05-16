const Hapi = require('hapi');
const Context = require('./src/db/strategies/base/contextStrategy');
const MongoDB = require('./src/db/strategies/mongodb/mongoDbStrategy');
const HeroiSchema = require('./src/db/strategies/mongodb/schemas/heroSchema');
const app = new Hapi.Server({
    port: 5000
})

async function main(){
    const connectiion = MongoDB.connect();
    const context = new Context(new MongoDB(connectiion, HeroiSchema))

    app.route([{
        path: '/herois',
        method: 'GET',
        handler: (request, head) =>{
            return context.read();
        }
    }]);

    await app.start();
    console.log('Aplicação rodando na porta', app.info.port)

};

main();