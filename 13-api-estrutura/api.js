const Hapi = require ('hapi');
const Context = require ('./src/db/strategies/base/contextStrategy');
const MongoDB = require ('./src/db/strategies/mongodb/mongoDbStrategy');
const HeroiSchema = require ('./src/db/strategies/mongodb/schemas/heroSchema');
const HeroRoute = require ('./routes/heroRoutes');

const app = new Hapi.Server({
    port: 5000
})

function mapRouter(instance, methods){    
    return methods.map(method => instance[method]())
}

async function main(){
    const connectiion = MongoDB.connect();
    const context = new Context(new MongoDB(connectiion, HeroiSchema))
    
    app.route([{
        ...mapRouter(new HeroRoute(context), HeroRoute.methods())
    }
        
    ]);

    await app.start();
    console.log('Aplicação rodando na porta', app.info.port)
    
    return app;
}

module.exports = main();