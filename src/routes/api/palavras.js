"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("teem");
const Palavras = require("../../models/palavras");
class PalavrasAPI {
    async obter(req, res) {
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
__decorate([
    app.route.methodName("obter/:id")
], PalavrasAPI.prototype, "obter", null);
//# sourceMappingURL=palavras.js.map