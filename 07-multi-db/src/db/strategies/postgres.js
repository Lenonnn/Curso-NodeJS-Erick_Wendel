const ICrud = require('./interfaces/interfaceCrud')

class PostgreSQL extends ICrud {
    constructor(){
        super()
    }
    create(item){
        console.log('O item foi salvo em PostgreSQL')
    }
}


module.exports = PostgreSQL;