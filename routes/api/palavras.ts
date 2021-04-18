import app = require("teem");
import Palavras = require("../../models/palavras");

class PalavrasAPI {
    @app.route.methodName("obter/:id")
        public async obter(req: app.Request, res: app.Response) {
            // Retorna uma palavra

            const id = parseInt(req.params["id"]);

            if (isNaN(id)) {
                res.status(400).json("Id inválido");
                return;
            }

            const palavras = await Palavras.obter(id);

            res.json(palavras);
        }
    }