const tempoPorRound = 5
let tempo = tempoPorRound

function IniciarTempoPausa(){
    IniciarTempoJogo()
}

function IniciarTempoJogo() {
    setInterval(function () {
        tempo--;
        $("#cronometro").text(tempo)
        if (tempo == 0) {
            FinalizarCronometro()
            $("body").css("background-color", "lightgray")
            tempo = 5
        }
    }, 1000)
}

function FinalizarCronometro(){
    tempo = tempoPorRound
    $("#cronometro").text(tempo)
    JogoLigado = false;
}