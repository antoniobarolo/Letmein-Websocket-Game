import socketio = require("socket.io");

class Jogador {
    private static jogadorMestre: Jogador;
    private static jogadorPalpiteiro: Jogador;

    private socket: socketio.Socket;
    private mestre: boolean;
    private nome: string;

    private constructor(socket: socketio.Socket, mestre: boolean) {
        this.socket = socket;
        this.mestre = mestre;
    }

    public static criarJogador(socket: socketio.Socket) {
        if (!this.jogadorMestre) {
            this.jogadorMestre = new Jogador(socket, true);
        }
        else if(!this.jogadorPalpiteiro) {
            this.jogadorPalpiteiro = new Jogador(socket, false);
        }
        else{
            
        }
    }
}

export = Jogador;