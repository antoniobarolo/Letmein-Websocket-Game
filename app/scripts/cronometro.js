const constTempoEspera = 6;
const constTempoRound = 31;

let tempoEspera = constTempoEspera
let tempoRound = constTempoRound

function proximoRound() {
    if (!jogoLigado) {
        return
    }
    round++
    if (round > 4) {
        finalizarJogo()
        return
    }
    tempoEspera = constTempoEspera
    tempoRound = constTempoRound
    setTimeout(iniciarTempoEspera, 1000);
}

function iniciarTempoEspera() {
    if (!jogoLigado) {
        return
    }
    $("#avisos").text('Prepare-se!')
    $("#palavra").text('...')
    if (tempoEspera > 10) {
        $("#cronometro").text('00:' + (tempoEspera - 1))
    }
    else {
        $("#cronometro").text('00:0' + (tempoEspera - 1))
    }

    tempoEspera--

    if (tempoEspera <= 0) {
        $("#cronometro").text('00:00')
        mostrarPalavra()
        setTimeout(iniciarTempoJogo, 1000)
    } else {
        setTimeout(iniciarTempoEspera, 1000)
    }
}


function iniciarTempoJogo() {
    if (!jogoLigado) {
        return
    }
    semPalavras = false
    roundRolando = true
    $("#avisos").text('Rodada atual: ' + round)
    if (tempoRound > 10) {
        $("#cronometro").text('00:' + (tempoRound - 1))
    }
    else {
        $("#cronometro").text('00:0' + (tempoRound - 1))
    }
    tempoRound--;

    if (tempoRound <= 0) {
        roundRolando = false
        return finalizarCronometro()
    } else {
        setTimeout(iniciarTempoJogo, 1000)
    }
}

function finalizarCronometro() {
    if (!jogoLigado) {
        return
    }
    $("#avisos").text('O tempo acabou!')
    setTimeout(proximoRound, 2000)
}
