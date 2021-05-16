var palavra = $(".palavra").text()
var pontos = 0
var round = 0;
var nome1, nome2;
var papel;

var JogoLigado = false;

// const socket = io();

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