// Mostra todos os bancos de dados
show dbs

// Mudando o contexto para uma database específica
use herois


// Mostra a cooleçao de tabelas/dados/documentos
show collections

// Create
db.herois.create({ nome: 'Iron man', poder: 'Rico'})
db.herois.insert({ nome: 'Iron man', poder: 'Rico'})

// Inserir muitos registros usnado sintaxe JS
for(let i= 0; i<=200; i++){
    db.herois.insert({ 
        nome: `Clone-${i}`, 
        poder: 'Rico',
        dataNascimento: '1980-08-08'
        })
}

// Read - Busca Herois e traz os dados formatados
db.herois.find().pretty()

// Read - Busca todos os Herois
db.herois.find()
db.herois.find({})

// Update 
db.herois.update({_id: id}, {$set: {nome: 'papaleguas'}})

// Delete
db.herois.delete({_id: id})

//Busca quantidade de registros
db.herois.count()

// Busca herois limitando a 100 e ordanendo por nome "ASC"
db.herois.find().limit(100).sort({ nome: -1 })

// Busca um heroi
db.herois.findOne()