class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.criarLeaderboard()
    }

    criarLeaderboard(){
        const sql = 'CREATE TABLE IF NOT EXISTS LEADERBOARDS (ID INT NOT NULL AUTO_INCREMENT, NOME1 VARCHAR(50) NOT NULL, NOME2 VARCHAR(50), PONTOS INT, DATA DATE, PRIMARY KEY(ID))'
        this.conexao.query(sql, (erro) => {
            if (erro){
                console.log(erro)
            }
            else{
                console.log('Tabela Leaderboard criada')
            }

        })
    }
}

module.exports = new Tabelas