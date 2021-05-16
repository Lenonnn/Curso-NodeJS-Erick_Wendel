// npm i mongoose
const Mongoose = require('mongoose')
Mongoose.connect('mongodb://usuário:minhasenhasecreta@localhost:27017/nomedobanco', {
  useNewUrlParser: true
}, (error) => {
  if (!error) return;
  console.error('error to connect on mongodb', error)
})

const connection = Mongoose.connection
connection.once('open', () => console.log('db is running!'))

setTimeout(() => {
  const state = connection.readyState;
  // Vai retornar o estado da conexão com o banco de dados; 
  console.log('state', state)
  /*
   0 - Disconectado
   1 - Conectado
   2 - Conectando
   3 - Disconectando 
   */
}, 1000);




const heroiSchema = new Mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  poder: {
    type: String,
    required: true
  },
  nascimento: {
    type: Date,
    required: true
  },
})
const model = Mongoose.model('herois', heroiSchema)
async function main() {
  const result = await model.create({
    nome: 'Batman',
    poder: 'Dinheiro',
    nascimento: new Date(1970, 01, 01)
  })
  console.log('result', result)

  const items = await model.find()
  console.log('items', items)

}
main()