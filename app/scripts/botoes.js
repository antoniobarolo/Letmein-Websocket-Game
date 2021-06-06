
function botaoIniciar() {
    if (jogoLigado) {
        return
    }
    /*  if(!Jogador.jogadorMestre || !Jogador.jogadorMestre){
          console.log('a sala ainda não esta preenchida')
          return
      }*/
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
            comando: 'iniciar'
        }))
    }
}

function iniciar() {
    jogoLigado = true
    $('#pontos').text('0')
    proximoRound()
}

function botaoPular() {
    if (!jogoLigado) {
        return
    }
    if (!roundRolando) {
        return
    }
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
            comando: 'pular'
        }))
    }
}

function pular(){
    if (!jogoLigado) {
        return
    }
    if (!roundRolando) {
        return
    }
    mostrarPalavra()
}

function botaoDesistir() {
    if (!jogoLigado) {
        return
    }
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
            comando: 'desistir'
        }))
    }
}

function desistir() {
    if (!jogoLigado) {
        return
    }
    finalizarJogo()
}