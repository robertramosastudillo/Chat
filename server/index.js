let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.get('/hola-mundo', (req, res) => {
    res.status(200).send('Hola mundo desde una ruta');
});

server.listen(6677, () => {
    console.log('Servidor esta funcionando en http://localhost:6677');
});