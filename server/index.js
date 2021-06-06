var mestre
var palpiteiro

function clienteConectado(ws) {
	if (!mestre) {
		mestre = ws
		mestre.send(JSON.stringify({ comando: 'montarTela', papel: 'mestre' }))
		console.log('Mestre conectado');
	}
	else if (!palpiteiro) {
		palpiteiro = ws
		palpiteiro.send(JSON.stringify({ comando: 'montarTela', papel: 'palpiteiro' }))
		console.log('Palpiteiro conectado');
	}

	ws.on("message", function (json) { clienteEnviouJson(ws, json) });
	ws.on("close", function () { clienteDesconectado(ws) });
}

function repassarParaOsDemaisClientes(ws, obj) {
	var json = JSON.stringify(obj)
	if (ws == mestre) {
		palpiteiro.send(json)
	}
	else if (ws == palpiteiro) {
		mestre.send(json)
	}
}

function clienteEnviouJson(ws, json) {
	var obj = JSON.parse(json);

	switch (obj.comando) {
		case "enviarPalavra":
			repassarParaOsDemaisClientes(ws, {
				comando: "enviarPalavra",
				palavra: obj.palavra
			})
			break
		case "mostrarPalavra":
			palpiteiro.send(json)
		break
	default:
		palpiteiro.send(json)
		mestre.send(json)
	break
	}

}

function clienteDesconectado(ws) {
	if (ws == mestre) {
		mestre = null
	}
	else if (ws == palpiteiro) {
		palpiteiro = null
	}
}

var WebSocket = require('ws'),
	WebSocketServer = WebSocket.Server,
	opcoesWebSocket = {
		port: 8181
	},
	wss = new WebSocketServer(opcoesWebSocket);

wss.on("connection", clienteConectado);