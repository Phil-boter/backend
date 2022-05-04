"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.userProfileData = function () {
        try {
            return {
                name: "MasterUser",
                id: 1,
            };
        }
        catch (e) {
            throw e;
        }
    };
    return UserService;
}());
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map