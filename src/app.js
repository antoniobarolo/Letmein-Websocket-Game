"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("teem");
const http = require("http");
const socketio = require("socket.io");
app.run({
    sqlConfig: {
        connectionLimit: 30,
        charset: "utf8mb4",
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "agenda"
    },
    onFinish: function () {
        // Configurar o socket.io aqui!
        const server = new http.Server(app.express);
        const io = new socketio.Server(server);
        io.on("connection", async function (socket) {
            console.log("New user connected");
            // await Pessoa.xxx();
        });
        server.listen(app.port, app.localIp, function () {
            console.log(`Server listening on ${app.localIp}:${app.port}`);
        });
    }
});
//# sourceMappingURL=app.js.map