"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LogService_1 = __importDefault(require("./LogService"));
var secrets = require("../../../secrets.json");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: secrets.EMAILADDRESS,
        pass: secrets.EMAILPASS,
    },
});
// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
        LogService_1.default.logMonitor('EmailService transponder', "verify", "ERROR", "emailservice failed to connenct to transponder", "");
    }
    else {
        console.log("Server is ready to take our messages");
        LogService_1.default.logMonitor('EmailService transponder', "verify", "Success", "emailservice connected to transponder", "");
    }
});
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendNewEmail = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var mail;
            return __generator(this, function (_a) {
                try {
                    if (!transporter) {
                        console.log("no transponder");
                        this.reconnect();
                    }
                    mail = {
                        to: secrets.EMAILADDRESS,
                        from: data.from,
                        subject: data.subject,
                        text: "".concat(data.from, " <").concat(secrets.EMAILADDRESS, "> \n").concat(data.text, " "),
                        created_at: data.created_at,
                    };
                    transporter.sendMail(mail, function (err) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            var answer = true;
                            return answer;
                        }
                    });
                    LogService_1.default.logMonitor('EmailService.sendMail', "TRANSPONDER", "Success", "email was send to ".concat(data.from), "");
                }
                catch (e) {
                    LogService_1.default.logMonitor('EmailService.sendMail', "TRANSPONDER", "ERROR", "email was NOT send to ".concat(data.from), "");
                    throw e;
                }
                return [2 /*return*/];
            });
        });
    };
    EmailService.prototype.reconnect = function () {
        LogService_1.default.logMonitor('EmailService.reconnect', "TRANSPONDER", "Success", "transponder was reconnected}", "");
        transporter.verify();
    };
    return EmailService;
}());
exports.default = new EmailService();
//# sourceMappingURL=EmailService.js.map