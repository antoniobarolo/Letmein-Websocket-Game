import app = require("teem");
import http = require("http");
import socketio = require("socket.io");

import Pessoa = require("./models/pessoa");

app.run({
	sqlConfig: {
		connectionLimit: 30,
		charset: "utf8mb4",
		host: "localhost",
		port: 3306,
		user: "root",
		password: "root",
		database: "interdisciplinar3"
	},

	onFinish: function () {
		// Configurar o socket.io aqui!

		const server = new http.Server(app.express);
        const io = new socketio.Server(server);

        io.on("connection", async function (socket: socketio.Socket) {
            console.log("New user connected");
			// await Pessoa.xxx();
        });

        server.listen(app.port, app.localIp, function () {
            console.log(`Server listening on ${app.localIp}:${app.port}`);
        });

	}
});
