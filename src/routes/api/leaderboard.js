"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const app = require("teem");
const Leaderboard = require("../../models/leaderboard");
class LeaderboardApi {
    async listar(req, res) {
        // Lista todas as pessoas
        const leaderboard = await Leaderboard.listar();
        res.json(leaderboard);
    }
    async criar(req, res) {
        // Cria uma nova pontuação no leaderboard
        const leaderboard = req.body;
        const erro = await Leaderboard.criar(leaderboard);
        if (erro) {
            res.status(400).json(erro);
            return;
        }
        res.json(leaderboard.id);
    }
}
__decorate([
    app.http.post()
], LeaderboardApi.prototype, "criar", null);
module.exports = LeaderboardApi;
//# sourceMappingURL=leaderboard.js.map