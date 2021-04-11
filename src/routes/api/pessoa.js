"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const app = require("teem");
const Pessoa = require("../../models/pessoa");
//**********************************************************************************
// Se por acaso ocorrer algum problema de conexão, autenticação com o MySQL,
// por favor, execute este código abaixo no MySQL e tente novamente!
//
// ALTER USER 'USUÁRIO'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SENHA';
//
// * Assumindo que o usuário seja root e a senha root, o comando ficaria assim:
//
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
//
//**********************************************************************************
class PessoaApi {
    async listar(req, res) {
        // Lista todas as pessoas
        const pessoas = await Pessoa.listar();
        res.json(pessoas);
    }
    async obter(req, res) {
        // Retorna uma pessoa existente
        const id = parseInt(req.params["id"]);
        if (isNaN(id)) {
            res.status(400).json("Id inválido");
            return;
        }
        const pessoa = await Pessoa.obter(id);
        res.json(pessoa);
    }
    async excluir(req, res) {
        // Exclui uma pessoa existente
        const id = parseInt(req.params["id"]);
        if (isNaN(id)) {
            res.status(400).json("Id inválido");
            return;
        }
        let erro = await Pessoa.excluir(id);
        if (erro) {
            res.status(400).json(erro);
            return;
        }
        res.sendStatus(204);
    }
    async criar(req, res) {
        // Cria uma nova pessoa
        const pessoa = req.body;
        const erro = await Pessoa.criar(pessoa);
        if (erro) {
            res.status(400).json(erro);
            return;
        }
        res.json(pessoa.id);
    }
    async alterar(req, res) {
        // Edita uma pessoa existente
        const pessoa = req.body;
        const erro = await Pessoa.alterar(pessoa);
        if (erro) {
            res.status(400).json(erro);
            return;
        }
        res.sendStatus(204);
    }
}
__decorate([
    app.route.methodName("obter/:id")
], PessoaApi.prototype, "obter", null);
__decorate([
    app.http.delete(),
    app.route.methodName("excluir/:id")
], PessoaApi.prototype, "excluir", null);
__decorate([
    app.http.post()
], PessoaApi.prototype, "criar", null);
__decorate([
    app.http.put()
], PessoaApi.prototype, "alterar", null);
module.exports = PessoaApi;
//# sourceMappingURL=pessoa.js.map