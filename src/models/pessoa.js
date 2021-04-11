"use strict";
const app = require("teem");
//**********************************************************************************
// Se por acaso ocorrer algum problema de conexão, autenticação com o MySQL,
// por favor, execute este código abaixo no MySQL e tente novamente!
//
// ALTER USER 'USUÁRIO'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SENHA'
//
// * Assumindo que o usuário seja root e a senha root, o comando ficaria assim:
//
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'
//
//**********************************************************************************
class Pessoa {
    static async listar() {
        let pessoas = null;
        await app.sql.connect(async (sql) => {
            pessoas = await sql.query("SELECT id, nome, email FROM pessoa");
        });
        return pessoas;
    }
    static async obter(id) {
        let pessoa = null;
        await app.sql.connect(async (sql) => {
            let pessoas = await sql.query("SELECT id, nome, email FROM pessoa WHERE id = ?", [id]);
            if (pessoas.length) {
                pessoa = pessoas[0];
            }
        });
        return pessoa;
    }
    static async excluir(id) {
        let erro = null;
        await app.sql.connect(async (sql) => {
            await sql.query("DELETE FROM pessoa WHERE id = ?", [id]);
            if (!sql.affectedRows) {
                erro = "Pessoa não encontrada";
            }
        });
        return erro;
    }
    static validar(pessoa) {
        if (!pessoa) {
            return "Dados inválidos!";
        }
        if (pessoa.nome) {
            pessoa.nome = pessoa.nome.trim();
        }
        if (pessoa.email) {
            pessoa.email = pessoa.email.trim();
        }
        if (!pessoa.nome || !pessoa.email) {
            return "Dados inválidos";
        }
        if (pessoa.nome.length > 50) {
            return "Nome muito longo";
        }
        if (pessoa.email.length > 50) {
            return "E-mail muito longo";
        }
        return null;
    }
    static async criar(pessoa) {
        let erro = Pessoa.validar(pessoa);
        if (erro) {
            return erro;
        }
        await app.sql.connect(async (sql) => {
            try {
                await sql.query("INSERT INTO pessoa (nome, email) VALUES (?, ?)", [pessoa.nome, pessoa.email]);
                pessoa.id = await sql.scalar("SELECT last_insert_id()");
            }
            catch (e) {
                if (e.code && e.code === "ER_DUP_ENTRY")
                    erro = `A pessoa "${pessoa.nome}" já existe`;
                else
                    throw e;
            }
        });
        return erro;
    }
    static async alterar(pessoa) {
        let erro = Pessoa.validar(pessoa);
        if (erro) {
            return erro;
        }
        // Apesar de querermos um número, pode ser que o cliente tenha enviado uma string...
        pessoa.id = parseInt(pessoa.id);
        if (isNaN(pessoa.id)) {
            return "Id inválido";
        }
        await app.sql.connect(async (sql) => {
            try {
                await sql.query("UPDATE pessoa SET nome = ?, email = ? WHERE id = ?", [pessoa.nome, pessoa.email, pessoa.id]);
                if (!sql.affectedRows) {
                    erro = "Pessoa não encontrada";
                }
            }
            catch (e) {
                if (e.code && e.code === "ER_DUP_ENTRY")
                    erro = `A pessoa "${pessoa.nome}" já existe`;
                else
                    throw e;
            }
        });
        return erro;
    }
}
module.exports = Pessoa;
//# sourceMappingURL=pessoa.js.map