"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var UserService_1 = __importDefault(require("../services/UserService"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.getUserProfileData = function (req, res, next) {
        try {
            var data = UserService_1.default.userProfileData();
            res.send(data).status(200);
        }
        catch (e) {
            throw e;
        }
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map