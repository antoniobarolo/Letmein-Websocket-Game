"use strict";
const Leaderboard = require("../../models/leaderboard");
//Ainda a finalizar
class LeaderboardApi {
    async listar(req, res) {
        // Lista todas as pessoas
        const leaderboard = await Leaderboard.listar();
        res.json(leaderboard);
    }
}
module.exports = LeaderboardApi;
//# sourceMappingURL=leaderboard.js.map