let tempo = 0

function Iniciar(duracao) {
    tempo = duracao
    setInterval(function () {
        tempo--;
        $("#tempo").text(tempo)
        if (tempo == 0) {
            $("body").css("background-color", "lightgray")
            tempo = 5
        }
    }, 1000)
}