
const socket = io('ws://localhost:8181');

socket.on('message', text => {
    $("#Palpite").text(text)
});

document.querySelector('button').onclick = () => {

    const text = $('#dica').val()
    socket.emit('message', text)
    
}
