"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
var About = /** @class */ (function () {
    function About(id, info_text_de, info_text_en, badges, created_at) {
        this.id = id;
        this.info_text_de = info_text_de;
        this.info_text_en = info_text_en;
        this.badges = badges;
        this.created_at = created_at;
    }
    About.createAboutInformation = function (aboutInformation) {
        return new About(aboutInformation.id, aboutInformation.info_text_de, aboutInformation.info_text_en, aboutInformation.badges, aboutInformation.created_at);
    };
    Object.defineProperty(About.prototype, "aboutId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(About.prototype, "germanInfoText", {
        get: function () {
            return this.info_text_de;
        },
        set: function (value) {
            this.info_text_de = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(About.prototype, "englishInfoText", {
        get: function () {
            return this.info_text_en;
        },
        set: function (value) {
            this.info_text_en = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(About.prototype, "knowledgeBadges", {
        get: function () {
            return this.badges;
        },
        set: function (value) {
            this.badges = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(About.prototype, "creationDate", {
        get: function () {
            return this.created_at;
        },
        set: function (value) {
            this.created_at = value;
        },
        enumerable: false,
        configurable: true
    });
    return About;
}());
exports.About = About;
//# sourceMappingURL=about.model.js.map