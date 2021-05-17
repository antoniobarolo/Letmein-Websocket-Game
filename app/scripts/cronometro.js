const tempoPorRound = 10
const tempoEspera = 5

function cronometro(tempo) {
    a = setInterval(function () {
        if (tempo >= 10) {
            $("#cronometro").text('00:' + tempo)
        }
        else {
            $("#cronometro").text('00:0' + tempo)
        }
        tempo--
        if (tempo <= 0) {
            clearInterval(a)
            IniciarTempoJogo()
        }
    }, 1000)
}

function IniciarTempoEspera() {
    if (round > 4) {
        FinalizarJogo()
        return
    }
    $("#avisos").text('Prepare-se!')
    cronometro(tempoEspera)    

}

function IniciarTempoJogo() {
    console.log('masa')
    $("#avisos").text('Rodada atual: ' + round)
    cronometro(tempoPorRound)
   
}

function FinalizarCronometro() {
    //$("body").css("background-color", "lightgray")
    round++
    $("#avisos").text('O tempo acabou!')
    setInterval(2000)
    IniciarTempoEspera()
}

function FinalizarJogo() {
    $("#avisos").text('Jogo finalizado. Bom trabalho!')
    JogoLigado = false;
    //Método! passar os pontos pro leaderboard
}

/* Rafa
var preCont, cont;

function proximoRound() {
	....
	preCont = 4;
	cont = 30;
	setTimeout(preEspera, 1000);
}

function preEspera() {
	preCont--;
	if (preCont <= 0) {
		...
		document.getElementById("contador").textContent = "30";
		setTimeout(subtrairContador, 1000);
	} else {
		document.getElementById("contador").textContent = preCont;
		setTimeout(preEspera, 1000);
	}
}

function subtrairContador() {
	cont--;
	if (cont <= 0) {
		... game over???
	} else {
		document.getElementById("contador").textContent = cont;
		setTimeout(subtrairContador, 1000);
	}
}


*/