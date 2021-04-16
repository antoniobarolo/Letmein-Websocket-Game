var palavra = $(".palavra").text()
var pontos = 0

function validarPalavra(){
    if (palavra == $("#palpite").val()){
        $("#resposta").text("Correto!")
        pontos++
        setPontos()
    }
    else{
        $("#resposta").text("Falso!")
        pontos--
        setPontos()
    }
}

function setPontos(){
    parseInt($("#pontos").text(pontos))
}