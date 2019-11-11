let socket = io.connect('http://192.168.0.16:6677', {'forceNew': true});

socket.on('messages', (data) => {
    render(data);
});

function render(data){
    let html = data.map(function(message, index){
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    let divMessages =document.getElementById('messages')
    divMessages.innerHTML = html;
    divMessages.scrollTop = divMessages.scrollHeight;
}

function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', message);

    return false;
}

