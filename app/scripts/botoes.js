
function botaoIniciar() {
    if (jogoLigado) {
        return
    }
  /*  if(!Jogador.jogadorMestre || !Jogador.jogadorMestre){
        console.log('a sala ainda não esta preenchida')
        return
    }*/
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
