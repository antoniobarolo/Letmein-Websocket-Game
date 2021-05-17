class Jogador {
    static jogadorMestre: Jogador;
    static jogadorPalpiteiro: Jogador;

     socket: socketio.Socket;
     mestre: boolean;
     nome: string;

     constructor(socket: socketio.Socket, mestre: boolean) {
        this.socket = socket;
        this.mestre = mestre;
    }

     static criarJogador(socket: socketio.Socket) {
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
