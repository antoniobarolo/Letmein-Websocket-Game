var pontos = 0
var round = 0;
var nome1, nome2;
var papel;
var jogoLigado = false;
var roundRolando = false;

function montarTela(jogador){
    switch (jogador.tipo) {
        case 1:
            $("body").html()
          break
        case 2:
            $("body").html()
          break
        case 3:
            $("body").html()
          break
        default:
            $("body").html()
      }
}


function finalizarJogo() {
    $("#avisos").text('Jogo finalizado. Bom trabalho!')
    JogoLigado = false;
}
