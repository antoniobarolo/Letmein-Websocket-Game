class Jogador {
    static jogadorMestre
    static jogadorPalpiteiro
    socket
    tipo

     constructor(socket, mestre) {
        this.socket = socket;
        this.tipo = tipo;
    }

     static criarJogador(socket) {
        if (!this.jogadorMestre) {
            this.jogadorMestre = new Jogador(socket, 1);
        }
        else if(!this.jogadorPalpiteiro) {
            this.jogadorPalpiteiro = new Jogador(socket, 2);
        }
        else{
            this.jogadorPalpiteiro = new Jogador(socket, 3);
        }
        montarTela(Jogador)
    }
}
