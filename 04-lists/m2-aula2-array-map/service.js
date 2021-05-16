const axios = require('axios') // importa dependencias do axios
const URL = `https://swapi.co/api/people` // passa local para consumir dados

async function obterPessoas(name){
    const url = `${URL}/?search=${name}&format=json`;
    const response = await axios.get(url);
    return response.data;
}

// obterPessoas('r2')
//     .then(function(resultado){
//         console.log('resultado', resultado)
//     })
//     .catch(function(error){
//         console.log('Deu rUiM mAis UmA vEz', errror)
//     })

    module.exports = {
        obterPessoas
    }