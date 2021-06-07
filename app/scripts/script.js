var pontos = 0
var round = 0
var papel
var jogoLigado = false
var roundRolando = false

var ws = new WebSocket("ws://localhost:8181")

ws.onopen = function (e) {
	console.log("WebSocket conectado");
}

ws.onclose = function (e) {
	console.log("WebSocket desconectado");
}

ws.onmessage = function (e) {
	var obj = JSON.parse(e.data);

	switch (obj.comando) {
		case "montarTela":
			papel = obj.papel
			montarTela(obj.papel)
			break
		case "enviarPalavra":
			$("#receive").val(obj.palavra)
			break
		case 'mostrarPalavra':
			palavra = obj.palavra
			break
		case 'setPontos':
			pontos++
			$("#pontos").text(pontos)
			mostrarPalavra()
			break
		case 'pular':
			pular()
			break
		case "iniciar":
			iniciar()
			break
		case "desistir":
			desistir()
			break
	}
}

function enviarPalavra() {
	var palavra = $('#send').val()

	if (ws.readyState === WebSocket.OPEN && palavra) {
		ws.send(JSON.stringify({
			comando: "enviarPalavra",
			palavra: palavra
		}));
		if (papel == 'palpiteiro') {
			validarPalavra()
		}
		$('#send').val("")
	}
}

function montarTela(papel) {
	if (papel == 'mestre') {
		$('main').html("<p id='avisos'>Você será o Mestre!</p><div id=tela><section class='topo'><div class='Acertos'><p><span id='pontos'></span> Pontos</p></div><div class='Palavra'><p id='palavra'>Palavra</p></div><div class='Timer'><p id='cronometro'>Tempo</p></div></section><section class='meio'><input type='text' id='send' placeholder='Digite sua dica'></input><input id='receive' placeholder='Palpite da sua dupla' readonly='readonly'></input></section><section class='base'><ul class='botoes'><li><button id='button-pular' onclick='botaoPular()'>Pular</button></li><li><button id='button-iniciar' onclick=botaoIniciar()>Iniciar</button></li><li><button id='button-desistir' onclick='botaoDesistir()'>Desistir</button></li></ul></section></div></div>")
	}
	else if (papel == 'palpiteiro') {
		$('main').html("  <p id='avisos'>Você será o Palpiteiro!</p><div id=tela><section class='topo'><div class='Acertos'><p><span id='pontos'></span> Pontos</p></div><div class='Palavra'><p id='palavra'>Resposta ???</p></div><div class='Timer'><p id='cronometro'>Tempo</p></div></section><section class='meio'><input type='text' id='send' placeholder='Digite seu palpite'></input><input id='receive' placeholder='Dica da sua dupla' readonly='readonly'></input></section><section class='base'><ul class='botoes'><li><button id='button-pular' onclick='botaoPular()'>Pular</button></li><li><button id='button-iniciar' onclick='botaoIniciar()'>Iniciar</button></li><li><button id='button-desistir' onclick='botaoDesistir()'>Desistir</button></li></ul></section></div>")
	}
}

function finalizarJogo() {
	$("#avisos").text('Jogo finalizado. Bom trabalho!')
	$("#palavra").text('')
	$("#cronometro").text('00:00')
	jogoLigado = false;
}
