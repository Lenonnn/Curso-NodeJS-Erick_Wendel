/*
0 - Obeter Usuário
1 - Obter número de telefone
2 - Obter endereço
*/

function obterUsuario(){
    setTimeout(function(){
        return{
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        };


    },1000);
};

function obterTelefone(idUsuario){
    setTimeout(() => {
        return {
            telefone: "11999222333",
            ddd: 51
        }
    }, 2000);
};

function obterEndereco(idUsuario){

};

const usuario = obterUsuario();
const telefone = obterTelefone(usuario.id);

Console.log('usuario',usuario);
Console.log('telefone',usuario);

