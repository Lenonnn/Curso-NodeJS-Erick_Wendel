const ContextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDB = require('./db/strategies/mongodb');
const PostgreSQL = require('./db/strategies/postgres');


const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create();

const contextPostgres = new ContextStrategy(new PostgreSQL())
contextPostgres.create();