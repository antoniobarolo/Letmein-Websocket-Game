const constTempoEspera = 5;
const constTempoRound = 12;


function proximoRound() {
    if (round > 4) {
        finalizarJogo()
        return
    }
    let tempoEspera = 5;
    let tempoRound = 12;
    setTimeout(iniciarTempoEspera(tempoEspera), 1000);
}

function iniciarTempoEspera(tempo) {
    $("#avisos").text('Prepare-se!')
    if (tempo >= 10) {
        $("#cronometro").text('00:' + tempo)
    }
    else {
        $("#cronometro").text('00:0' + tempo)
    }
    tempo--;

    if (tempo <= 0) {
        $("#cronometro").text('00:00')
        setTimeout(iniciarTempoJogo(tempoRound), 1000)
    } else {
        setTimeout(iniciarTempoEspera(tempoEspera), 1000)
    }
}


function iniciarTempoJogo(tempo) {
    $("#avisos").text('Rodada atual: ' + round)
    if (tempo >= 10) {
        $("#cronometro").text('00:' + tempo)
    }
    else {
        $("#cronometro").text('00:0' + tempo)
    }
    tempo--;

    if (tempo <= 0) {
        FinalizarCronometro()
    } else {
        setTimeout(iniciarTempoJogo(tempoRound), 1000)
    }
}

function FinalizarCronometro() {
    $("body").css("background-color", "lightgray")
    /*
    round++
    $("#avisos").text('O tempo acabou!')
    setInterval(2000)
    iniciarTempoEspera()
    */
}

function FinalizarJogo() {
    $("#avisos").text('Jogo finalizado. Bom trabalho!')
    JogoLigado = false;
    //Método! passar os pontos pro leaderboard
}
