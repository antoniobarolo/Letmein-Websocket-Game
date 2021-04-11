"use strict";
const app = require("teem");
class Leaderboard {
    static async listar() {
        let leaderboard = null;
        await app.sql.connect(async (sql) => {
            leaderboard = await sql.query("SELECT id, nome, pontuacao FROM leaderboard");
        });
        return leaderboard;
    }
    static validar(leaderboard) {
        if (!leaderboard) {
            return "Dados inválidos!";
        }
        if (leaderboard.nome) {
            leaderboard.nome = leaderboard.nome.trim();
        }
        if (!leaderboard.nome) {
            return "Dados inválidos. Digite seu nickname.";
        }
        if (leaderboard.nome.length > 50) {
            return "Nome muito longo";
        }
        return null;
    }
    static async atualizar(leaderboard) {
        // Apesar de querermos um número, pode ser que o cliente tenha enviado uma string...
        leaderboard.id = parseInt(leaderboard.id);
        if (isNaN(leaderboard.id)) {
            return "Id inválido";
        }
        await app.sql.connect(async (sql) => {
            await sql.query("UPDATE pessoa SET pontuacao = pontuacao + 1 WHERE id = ?", [leaderboard.id]);
        });
    }
    static async criar(leaderboard) {
        let erro = Leaderboard.validar(leaderboard);
        if (erro) {
            return erro;
        }
        await app.sql.connect(async (sql) => {
            try { //Tem que ver se a sintaxe está certa
                await sql.query("INSERT INTO leaderboard (nome, pontuacao) VALUES (?, 0)", [leaderboard.nome]);
                leaderboard.id = await sql.scalar("SELECT last_insert_id()");
            }
            catch (e) {
                if (e.code && e.code === "ER_DUP_ENTRY")
                    erro = `O time "${leaderboard.nome}" já existe`;
                else
                    throw e;
            }
        });
        return erro;
    }
    static async reset() {
        let erro = null;
        await app.sql.connect(async (sql) => {
            await sql.query("TRUNCATE leaderboard");
        });
        return erro;
    }
}
module.exports = Leaderboard;
//# sourceMappingURL=leaderboard.js.map