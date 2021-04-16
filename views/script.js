var palavra = $(".palavra").text()
var pontos = 0

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