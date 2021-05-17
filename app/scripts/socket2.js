
const socket = io('ws://localhost:8181');

socket.on('message', text => {
    //aqui poe coisa diferente pra cada tipo de jogador
    $("#Palpite").val(text)
});

function enviar() {
    //aqui poe coisa diferente pra cada tipo de jogador
    console.log('teste')
        const text = $('#dica').val();
        socket.emit('message', text)
        
    }