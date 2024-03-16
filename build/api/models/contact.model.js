"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var Contact = /** @class */ (function () {
    function Contact(id, info_text_de, info_text_en, created_at) {
        this.id = id;
        this.info_text_de = info_text_de;
        this.info_text_en = info_text_en;
        this.created_at = created_at;
    }
    Contact.createContactInformation = function (contactInformation) {
        return new Contact(contactInformation.id, contactInformation.info_text_de, contactInformation.info_text_en, contactInformation.created_at);
    };
    Object.defineProperty(Contact.prototype, "contactId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "germanInfoText", {
        get: function () {
            return this.info_text_de;
        },
        set: function (value) {
            this.info_text_de = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "englishInfoText", {
        get: function () {
            return this.info_text_en;
        },
        set: function (value) {
            this.info_text_en = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "creationDate", {
        get: function () {
            return this.created_at;
        },
        set: function (value) {
            this.created_at = value;
        },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.model.js.map