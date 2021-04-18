import app = require("teem");
import Leaderboard = require("../../models/leaderboard");

class LeaderboardApi {
	public async listar(req: app.Request, res: app.Response) {
		// Lista todas as pessoas

		const leaderboard = await Leaderboard.listar();

		res.json(leaderboard);
	}

	@app.http.post()
	public async criar(req: app.Request, res: app.Response) {
		// Cria uma nova pontuação no leaderboard

		const leaderboard: Leaderboard = req.body;

		const erro = await Leaderboard.criar(leaderboard);

		if (erro) {
			res.status(400).json(erro);
			return;
		}

		res.json(leaderboard.id);
	}



}

export = LeaderboardApi