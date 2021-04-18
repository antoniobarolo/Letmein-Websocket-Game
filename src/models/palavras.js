"use strict";
const app = require("teem");
class Palavras {
    static async obter(id) {
        let palavra = null;
        await app.sql.connect(async (sql) => {
            let palavras = await sql.query("SELECT palavra FROM palavras WHERE id = ?", [id]);
            if (palavras.length) {
                palavra = palavras[0];
            }
        });
        return palavra;
    }
}
module.exports = Palavras;
//# sourceMappingURL=palavras.js.map