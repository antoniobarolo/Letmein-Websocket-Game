import app = require("teem");
import Leaderboard = require("../../models/leaderboard");
//Ainda a finalizar
class LeaderboardApi {
	public async listar(req: app.Request, res: app.Response) {
		// Lista todas as pessoas

		const leaderboard = await Leaderboard.listar();

		res.json(leaderboard);
	}



}

export = LeaderboardApi