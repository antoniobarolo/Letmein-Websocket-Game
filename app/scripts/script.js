//import PalavrasAPI = require ("../routes/api/palavras")

var palavra = $(".palavra").text()
var pontos = 0
var round = 0;
var nome1, nome2;
var papel;
var JogoLigado = false;

function BotaoIniciar(){
    if(JogoLigado){
        return
    }
    //pega os nomes e guarda
    //define aleatoriamente qm vai ser quem
    //muda a tela do jogo
    JogoLigado = true;
    IniciarTempoEspera()
}

function MontarTela(){
    //define a cor e infos dependendo da funcao
}

function MostrarPalavra(){
    //PalavrasAPI.obter(getRandomInt(min, max));
    //Método! Obter Palavra
    $("#palavra").text(palavra)
}

function ValidarPalavra(){
    if ($("#palpite").val() == palavra){
        SetPontos()
        MostrarPalavra()
    }
}

$("#botao-validar").on("click", function ValidarPalavra(){
    if (palavra == $("#palpite").val()){
        $("#resposta").text("Correto!")
        pontos++
        SetPontos()
    }
    else{
        $("#resposta").text("Falso!")
        pontos--
        SetPontos()
    }
})

$("#palpite").on("input", function (){$("#resposta").text("Hmm...")})

function SetPontos(){
    parseInt($("#pontos").text(pontos))
}

function BotaoDesistir(){
    FinalizarJogo()
}

function BotaoPular(){
    MostrarPalavra()
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function sortearPalavra() {
    var palavras = [1,2,3,4,5,6,7,8,9,10];
	var i = Math.floor(Math.random() * palavras.length);
	var palavra = palavras[i];
	palavras.splice(i, 1);
	return palavra;
}
