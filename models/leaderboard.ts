import app = require("teem");

class Leaderboard {
	public id: number;
	public nome: string;
	public pontuacao: number;

	public static async listar(): Promise<Leaderboard[]> {
		let leaderboard: Leaderboard[] = null;

		await app.sql.connect(async (sql) => {

			leaderboard = await sql.query("SELECT id, nome, pontuacao FROM leaderboard");

		});

		return leaderboard;
	}

    private static validar(leaderboard: Leaderboard): string {
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

    public static async atualizar(leaderboard: Leaderboard) {
       
        // Apesar de querermos um número, pode ser que o cliente tenha enviado uma string...
        leaderboard.id = parseInt(leaderboard.id as any);

		if (isNaN(leaderboard.id)) {
			return "Id inválido";
		}

        await app.sql.connect(async (sql) => {

				await sql.query("UPDATE pessoa SET pontuacao = pontuacao + 1 WHERE id = ?", [leaderboard.id]);
				
		});
        
    }

    public static async criar(leaderboard: Leaderboard): Promise<string> {
		let erro = Leaderboard.validar(leaderboard);

		if (erro) {
			return erro;
		}

		await app.sql.connect(async (sql) => {

			try { //Tem que ver se a sintaxe está certa
				await sql.query("INSERT INTO leaderboard (nome, pontuacao) VALUES (?, 0)", [leaderboard.nome]);

				leaderboard.id = await sql.scalar("SELECT last_insert_id()");
			} catch (e) {
				if (e.code && e.code === "ER_DUP_ENTRY")
					erro = `O time "${leaderboard.nome}" já existe`;
				else
					throw e;
			}

		});

		return erro;
	}

    public static async reset (): Promise<string> {
		let erro: string = null;

		await app.sql.connect(async (sql) => {

			await sql.query("TRUNCATE leaderboard");

		});

		return erro;
	}
}

export = Leaderboard