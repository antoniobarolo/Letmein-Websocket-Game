
const socket = io('ws://localhost:8080');

socket.on('message', text => {

    $('#palpite').val(text)

});

function enviar() {
console.log('teste')
    const text = $('#dica').val();
    socket.emit('message', text)
    
}
