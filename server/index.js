let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola-mundo', (req, res) => {
    res.status(200).send('Hola mundo desde una ruta');
});

io.on('connection', (socket) => {
    console.log('El cliente con IP: ' + socket.handshake.address + 'se ha conectado...');
});

server.listen(6677, () => {
    console.log('Servidor esta funcionando en http://localhost:6677');
});