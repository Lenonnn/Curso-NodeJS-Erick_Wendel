# Comandos do DOCKER
# ---------       DOCKER PostgreSQL     -----------------

*  Criar uma imagem de banco de dados postgreSQL no docker
docker run \
    --name postgres \
    -e POSTGRES_USER=lenondev \ define usuário
    -e POSTGRES_PASSWORD=meucursodenodejs \ define a senha
    -e POSTGRES_DB=heroes \ define o nome do banco
    -p 5432:5432 \ porta que vai ser exposta no docker
    -d \
    postgres\ nome da imagem

## docker run --name postgres -e POSTGRES_USER=lenondev -e POSTGRES_PASSWORD=meucursodenodejs -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

*  Cria uma interface gráfica para usar o banco de dados ( Cria um cliente )
docker run \
    --name adminer \ Define nome de user
    -p 8080:8080 \ Define porta que vai rodar
    --link postgres:postgres \ Permite acessar minha imagem no pstgres
    - d \ define que vai rodar em segundo plano
    adminer \ 

# Comando para rodar client postgres
## docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer







# ----------            DOCKER MongoDB       --------------------
### Comando para rodar mongoDB
*  Cria uma imagem de banco de dados MongoDB no docker
 docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4 \

## docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin -d mongo:4

--- Cria uma interface gráfica para usar o banco de dados ( Cria um cliente ) ---
docker run \
    --name mongoclient \ Define nome de user
    -p 3000:3000 \ Define porta que vai rodar
    --link mongodb:mongodb \ Permite acessar minha imagem no mongodb
    -d \ define que vai rodar em segundo plano
    mongoclient:mongoclient \ 

# Comando para rodar mongoDB Client
### admin do browser
### docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient



# Criar um usuário para poder usar nosso banco de dados mongdb-----

## docker exec -it mongodb mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'lenon' , pwd: 'cursodenodejs', roles: [{role: 'readWrite', db:'herois' }]})"



# Outros comandos

### docker ps --------> Exibe processos rodando na máquina

### docker exec -it postgres /bin/bash ---------> Entra no container pra rodar comandos dentro dele

### docker rm adminer / postgres / mongodb / mongoclient  ------->  Comando para limpar container/eliminar imagens


# Comando para reiniciar/rodar os containers
### docker container start mongodb postgres mongoclient adminer
### docker start mongoclient/mongodb
### docker start mongoclient
### docker start adminer/postgres
### docker start adminer

" Se vc parar os containers (ou desligar o PC), não precisa reinicia-los com o comando 'docker run', eles continuam como estavam quando vc desligou o PC (pode visualiza-los com o comando 'docker ps -a'), porém eles estão parados, para colocar eles para rodarem de novo basta usar o comando 'docker container start ', vc pode passar todos os nomes de uma unica vez tambem, como eu uso: 'docker container start mongodb postgres mongoclient adminer', inclusive todas as coisas que foram inseridas nos bancos desde a ultima vez que vc usou estarão lá, isso também vale para os dados da conexão do mongocliente. "


### docker rm $(docker ps -aq)      ---------> remove todos os containers


## Para executer os testes 
### npm t


