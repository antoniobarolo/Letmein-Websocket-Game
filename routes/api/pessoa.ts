import app = require("teem");
import Pessoa = require("../../models/pessoa");

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
	public async listar(req: app.Request, res: app.Response) {
		// Lista todas as pessoas

		const pessoas = await Pessoa.listar();

		res.json(pessoas);
	}

	@app.route.methodName("obter/:id")
	public async obter(req: app.Request, res: app.Response) {
		// Retorna uma pessoa existente

		const id = parseInt(req.params["id"]);

		if (isNaN(id)) {
			res.status(400).json("Id inválido");
			return;
		}

		const pessoa = await Pessoa.obter(id);

		res.json(pessoa);
	}

	@app.http.delete()
	@app.route.methodName("excluir/:id")
	public async excluir(req: app.Request, res: app.Response) {
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

	@app.http.post()
	public async criar(req: app.Request, res: app.Response) {
		// Cria uma nova pessoa

		const pessoa: Pessoa = req.body;

		const erro = await Pessoa.criar(pessoa);

		if (erro) {
			res.status(400).json(erro);
			return;
		}

		res.json(pessoa.id);
	}

	@app.http.put()
	public async alterar(req: app.Request, res: app.Response) {
		// Edita uma pessoa existente

		const pessoa: Pessoa = req.body;

		const erro = await Pessoa.alterar(pessoa);

		if (erro) {
			res.status(400).json(erro);
			return;
		}

		res.sendStatus(204);
	}
}

export = PessoaApi;
