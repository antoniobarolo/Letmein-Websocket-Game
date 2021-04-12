import app = require("teem");

class Palavras {
    public id: number;
    public palavra: String;

    public static async obter(id: number): Promise<Palavras> {
		let palavra: Palavras = null;

		await app.sql.connect(async (sql) => {

			let palavras: Palavras[] = await sql.query("SELECT palavra FROM palavras WHERE id = ?", [id]);

			if (palavras.length) {
				palavra = palavras[0];
			}

		});

		return palavra
	}
}

export = Palavras