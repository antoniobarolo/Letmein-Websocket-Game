
const socket = io('ws://localhost:8181');

socket.on('message', text => {
    $("#Palpite").val(text)
});

function enviar() {
    console.log('teste')
        const text = $('#dica').val();
        socket.emit('message', text)
        
    }