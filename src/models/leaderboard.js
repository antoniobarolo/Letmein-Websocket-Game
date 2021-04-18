"use strict";
const app = require("teem");
class Leaderboard {
    static async listar() {
        let leaderboard = null;
        await app.sql.connect(async (sql) => {
            leaderboard = await sql.query("SELECT id, nome1, nome2, pontuacao FROM leaderboard");
        });
        return leaderboard;
    }
    static validar(leaderboard) {
        if (!leaderboard) {
            return "Dados inválidos!";
        }
        if (leaderboard.nome1) {
            leaderboard.nome1 = leaderboard.nome1.trim();
        }
        if (!leaderboard.nome1) {
            return "Dados inválidos. Digite seu nickname.";
        }
        if (leaderboard.nome2) {
            leaderboard.nome2 = leaderboard.nome2.trim();
        }
        if (!leaderboard.nome2) {
            return "Dados inválidos. Digite seu nickname.";
        }
        if (leaderboard.nome1.length > 50) {
            return "Nome muito longo";
        }
        if (leaderboard.nome2.length > 50) {
            return "Nome muito longo";
        }
        return null;
    }
    static async criar(leaderboard) {
        let erro = Leaderboard.validar(leaderboard);
        if (erro) {
            return erro;
        }
        await app.sql.connect(async (sql) => {
            try { //Tem que ver se a sintaxe está certa
                await sql.query("INSERT INTO leaderboard (nome1, nome2, pontuacao) VALUES (?, ?, ?)", [leaderboard.nome1, leaderboard.nome2, leaderboard.pontuacao]);
                leaderboard.id = await sql.scalar("SELECT last_insert_id()");
            }
            catch (e) {
                if (e.code && e.code === "ER_DUP_ENTRY")
                    erro = `O time "${leaderboard.nome1}" e "${leaderboard.nome2}" já existe`;
                else
                    throw e;
            }
        });
        return erro;
    }
}
module.exports = Leaderboard;
//# sourceMappingURL=leaderboard.js.map