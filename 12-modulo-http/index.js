const http = require('http')

http.createServer((request, response) => {
    response.end('Diele !!!!');
})
.listen(5000, () => console.log('Servidor rodando'))