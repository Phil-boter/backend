"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
var Badge = /** @class */ (function () {
    function Badge(logo, color, label) {
        this.logo = logo;
        this.color = color;
        this.label = label;
    }
    Object.defineProperty(Badge.prototype, "badgeLogo", {
        get: function () {
            return this.logo;
        },
        set: function (logo) {
            this.logo = logo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Badge.prototype, "badgeColor", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Badge.prototype, "badgeLabel", {
        get: function () {
            return this.label;
        },
        set: function (label) {
            this.label = label;
        },
        enumerable: false,
        configurable: true
    });
    return Badge;
}());
exports.Badge = Badge;
//# sourceMappingURL=badge.model.js.map