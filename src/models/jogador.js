"use strict";
class Jogador {
    constructor(socket, mestre) {
        this.socket = socket;
        this.mestre = mestre;
    }
    static criarJogador(socket) {
        if (!this.jogadorMestre) {
            this.jogadorMestre = new Jogador(socket, true);
        }
        else if (!this.jogadorPalpiteiro) {
            this.jogadorPalpiteiro = new Jogador(socket, false);
        }
        else {
        }
    }
}
module.exports = Jogador;
//# sourceMappingURL=jogador.js.map