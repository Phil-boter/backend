"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spicedPg = require("spiced-pg");
var _a = require("../secrets.json"), postgresDATABASE = _a.postgresDATABASE, postgresPIN = _a.postgresPIN, postgresUSER = _a.postgresUSER, postgresBASE = _a.postgresBASE;
var db = spicedPg(process.env.DATABASE_URL ||
    "".concat(postgresBASE, ":").concat(postgresUSER).concat(postgresPIN, "/").concat(postgresDATABASE));
var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
    }
    // _____________________________  Project Section Start ____________________________________________
    DatabaseConnection.prototype.getAllProjects = function () {
        var q = "SELECT projects.id, title,title_second, description_de, description_en, technology_de, technology_en, main_image, images, link, host, projects.created_at, badge FROM projects LEFT JOIN badges ON projects.title = badge_id ORDER BY projects.id;";
        return db.query(q);
    };
    DatabaseConnection.prototype.getSelectedProject = function (id) {
        var q = "SELECT projects.id, title,title_second, description_de, description_en, technology_de, technology_en, main_image, images, link, host, projects.created_at, badge FROM projects LEFT JOIN badges ON projects.title = badge_id where projects.id = $1;";
        var params = [id];
        return db.query(q, params);
    };
    // _____________________________ Project Section End ________________________________________________
    // _____________________________ Monitor Log Sectionn Start _________________________________________
    DatabaseConnection.prototype.saveStatusLog = function (method, action, status, logMessage, param) {
        var q = "INSERT into data_log(method, action, status, log_message, params) VALUES ($1, $2, $3, $4, $5)";
        var params = [method, action, status, logMessage, param];
        return db.query(q, params);
    };
    DatabaseConnection.prototype.cleanStatusLogs = function () {
        var q = "DELETE from data_log where created_at < now() - interval '7 days'";
        return db.query(q);
    };
    // _____________________________ Monitor Log Section End ____________________________________________
    //______________________________ About Section start ________________________________________________
    DatabaseConnection.prototype.getAboutInformation = function () {
        var q = "SELECT * FROM about_informations;";
        return db.query(q);
    };
    //______________________________ About Section end __________________________________________________
    //______________________________ Contact Section start ________________________________________________
    DatabaseConnection.prototype.getContactInformation = function () {
        var q = "SELECT * FROM contact_informations;";
        console.log(q);
        return db.query();
    };
    return DatabaseConnection;
}());
exports.default = new DatabaseConnection();
//# sourceMappingURL=DatabaseConnection.js.map