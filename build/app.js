"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var routes_1 = require("./api/routes");
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new routes_1.Routes();
        this.app = (0, express_1.default)();
        this.config();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        });
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        if (process.env.NODE_ENV === "production") {
            this.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "frontend", "build")));
            this.app.get("*", function (req, res) {
                res.sendFile(path_1.default.resolve(__dirname, "..", "frontend", "build", "index.html"));
            });
        }
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map