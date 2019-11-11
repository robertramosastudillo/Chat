let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola-mundo', (req, res) => {
    res.status(200).send('Hola mundo desde una ruta');
});

let messages = [{
    id: 1,
    text: 'Bienvenido al chat privado de Socket.io y NodeJS...',
    nickname: 'Bot - robertramosastudillo'
}];

io.on('connection', (socket) => {
    console.log('El cliente con IP: ' + socket.handshake.address + 'se ha conectado...');

    socket.emit('messages', messages);

    socket.on('add-message', (data) => {
        messages.push(data);

        io.sockets.emit('messages', messages);
    });
});

server.listen(6677, () => {
    console.log('Servidor esta funcionando en http://localhost:6677');
});