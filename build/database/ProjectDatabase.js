"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spicedPg = require("spiced-pg");
var _a = require("../../secrets.json"), postgresDATABASE = _a.postgresDATABASE, postgresPIN = _a.postgresPIN, postgresUSER = _a.postgresUSER, postgresBASE = _a.postgresBASE;
var db = spicedPg(process.env.DATABASE_URL ||
    "".concat(postgresBASE, ":").concat(postgresUSER).concat(postgresPIN, "/").concat(postgresDATABASE));
var ProjecDatabase = /** @class */ (function () {
    function ProjecDatabase() {
    }
    ProjecDatabase.prototype.getAllProjects = function () {
        var q = "SELECT * FROM projects ORDER BY id";
        return db.query(q);
    };
    ProjecDatabase.prototype.getProject = function (id) {
        var q = "SELECT * FROM projects WHERE id = $1";
        var params = [id];
        return db.query(q, params);
    };
    return ProjecDatabase;
}());
exports.default = new ProjecDatabase();
//# sourceMappingURL=ProjectDatabase.js.map