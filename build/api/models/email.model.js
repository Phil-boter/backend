"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Email = /** @class */ (function () {
    function Email(to, from, subject, text, created_at) {
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.text = text;
        this.created_at = created_at;
    }
    Email.createEmail = function (to, from, subject, text, created_at) {
        return new Email(to, from, subject, text, created_at);
    };
    return Email;
}());
exports.default = Email;
//# sourceMappingURL=email.model.js.map