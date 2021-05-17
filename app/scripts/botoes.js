
function botaoIniciar() {
    if (jogoLigado) {
        return
    }
    //pega os nomes e guarda
    //define aleatoriamente qm vai ser quem
    //muda a tela do jogo
    jogoLigado = true;
    proximoRound()
}

function botaoPular() {
    if (!jogoLigado) {
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
