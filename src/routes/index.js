"use strict";
const app = require("teem");
class Index {
    index(req, res) {
        res.sendFile(app.dir.views + "/index.html");
    }
    outro(req, res) {
        res.sendFile(app.dir.views + "/outro.html");
    }
}
module.exports = Index;
//# sourceMappingURL=index.js.map