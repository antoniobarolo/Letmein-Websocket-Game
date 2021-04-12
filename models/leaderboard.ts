import app = require("teem");

class Leaderboard {
	public id: number;
	public nome1: string;
	public nome2: string;
	public pontuacao: number;

	public static async listar(): Promise<Leaderboard[]> {
		let leaderboard: Leaderboard[] = null;

		await app.sql.connect(async (sql) => {

			leaderboard = await sql.query("SELECT id, nome1, nome2, pontuacao FROM leaderboard");

		});

		return leaderboard;
	}

	private static validar(leaderboard: Leaderboard): string {
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

	public static async criar(leaderboard: Leaderboard): Promise<string> {
		let erro = Leaderboard.validar(leaderboard);

		if (erro) {
			return erro;
		}

		await app.sql.connect(async (sql) => {

			try { //Tem que ver se a sintaxe está certa
				await sql.query("INSERT INTO leaderboard (nome1, nome2, pontuacao) VALUES (?, ?, ?)", [leaderboard.nome1, leaderboard.nome2, leaderboard.pontuacao], );

				leaderboard.id = await sql.scalar("SELECT last_insert_id()");
			} catch (e) {
				if (e.code && e.code === "ER_DUP_ENTRY")
					erro = `O time "${leaderboard.nome1}" e "${leaderboard.nome2}" já existe`;
				else
					throw e;
			}

		});

		return erro;
	}

}

export = Leaderboard