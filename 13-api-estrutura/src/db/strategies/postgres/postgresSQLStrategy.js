const Idb = require('../base/interfaceDb');
const Sequelize = require('sequelize');


class PostgreSQLStrategy extends Idb {
  
  //1º Step
  constructor(connection, schema) {
    super();
    this._db = schema;
    this._connection = connection; 
  }
 //2º Step
 async defineModel(connection, schema) {
   const model = connection.define(
     schema.name, schema.schema, schema.options,
   );
   await model.sync();
   return model;
 }
   
 static async connect() {
    const sequelize = new Sequelize(
      'heroes', //database
      'lenondev', // user
      'meucursodenodejs', //senha
      // "postgres://lenondev:meucursodenodejs@localhost:5432/heroes",
      {
        host: 'localhost',
        dialect: 'postgres',
        // case sensitive
        quoteIdentifiers: false,
        // deprecation warning
        operatorsAliases: false,
        //disable logging
        logging: false
        // dialectOptions: {
        //   ssl: true,
        },
    );

    return sequelize;
  }

  async isConnected() {
    try {
      // await this._connect();
      await this._connection.authenticate();
      return true;
    } catch (error) {
      console.error('fail!', error);
      return false;
    }
  }

  create(item) {
    return this._db.create(item, 
      { raw: true });
  }

  read(item) {
    return this._db.findAll(
      { where: item, 
        raw: true });
  }

  update(id, item) {
    return this._db.update(item, 
      { where: { id } });
  }
  delete(id) {
    const query = id ? { id } : {};
    return this._db.destroy(
      { where: query });
  }
}

module.exports = PostgreSQLStrategy;
