const tempoPorRound = 10
const tempoEspera = 5

function cronometro(tempo) {
    a = setInterval(function () {
        if (tempo >= 10) {
            $("#cronometro").text('00:' + tempo)
        }
        else {
            $("#cronometro").text('00:0' + tempo)
        }
        tempo--
        if (tempo <= 0) {
            clearInterval(a)
            IniciarTempoJogo()
        }
    }, 1000)
}

function IniciarTempoEspera() {
    if (round > 4) {
        FinalizarJogo()
        return
    }
    $("#avisos").text('Prepare-se!')
    cronometro(tempoEspera)    

}

function IniciarTempoJogo() {
    console.log('masa')
    $("#avisos").text('Rodada atual: ' + round)
    cronometro(tempoPorRound)
   
}

function FinalizarCronometro() {
    //$("body").css("background-color", "lightgray")
    round++
    $("#avisos").text('O tempo acabou!')
    setInterval(2000)
    IniciarTempoEspera()
}

function FinalizarJogo() {
    $("#avisos").text('Jogo finalizado. Bom trabalho!')
    JogoLigado = false;
    //Método! passar os pontos pro leaderboard
}