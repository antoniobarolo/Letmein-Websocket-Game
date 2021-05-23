
function botaoIniciar() {
    if (jogoLigado) {
        return
    }
    jogoLigado = true;
    proximoRound()
}

function botaoPular() {
    if (!jogoLigado) {
        return
    }
    if(!roundRolando){
        return
    }
    mostrarPalavra()
}

function botaoDesistir() {
    if (!jogoLigado) {
        return
    }
    finalizarJogo()
}
