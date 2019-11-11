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
            </di>
        `);
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}

