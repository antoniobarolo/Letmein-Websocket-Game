const conexao = require('../infra/conexao')

class Leaderboard {
    inserir(score){
        const sql = 'INSERT INTO LEADERBOARD SET ?'
        conexao.query(sql, leaderboard, (erro, resultados) => {
            if (erro){
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
    }

    listar(){}
}