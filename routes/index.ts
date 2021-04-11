import app = require("teem");

class Index {
	public index(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/index.html");
	}

	public outro(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/outro.html");
	}
}

export = Index;
