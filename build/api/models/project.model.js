"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project(id, title, title_second, description_de, description_en, technology_de, technology_en, main_image, images, link, host, created_at, badges) {
        this.id = id;
        this.title = title;
        this.title_second = title_second;
        this.description_de = description_de;
        this.description_en = description_en;
        this.technology_de = technology_de;
        this.technology_en = technology_en;
        this.main_image = main_image;
        this.images = images;
        this.link = link;
        this.host = host;
        this.created_at = created_at;
        this.badges = badges;
    }
    Project.createProject = function (project) {
        return new Project(project.id, project.title, project.title_second, project.description_de, project.description_en, project.technology_de, project.technology_en, project.main_image, project.images, project.link, project.host, project.created_at, project.badges);
    };
    Object.defineProperty(Project.prototype, "projectId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "titleOne", {
        get: function () {
            return this.title;
        },
        set: function (value) {
            this.title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "titleTwo", {
        get: function () {
            return this.title_second;
        },
        set: function (value) {
            this.title_second = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "germanDescription", {
        get: function () {
            return this.description_de;
        },
        set: function (value) {
            this.description_de = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "englishDescription", {
        get: function () {
            return this.description_en;
        },
        set: function (value) {
            this.description_en = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "germanUsedTechnology", {
        get: function () {
            return this.technology_de;
        },
        set: function (value) {
            this.technology_de = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "englishUsedTechnology", {
        get: function () {
            return this.technology_en;
        },
        set: function (value) {
            this.technology_en = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "mainImageOfProject", {
        get: function () {
            return this.main_image;
        },
        set: function (value) {
            this.main_image = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "subImageArray", {
        get: function () {
            return this.images;
        },
        set: function (value) {
            this.images = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "urlForGitHubLink", {
        get: function () {
            return this.link;
        },
        set: function (value) {
            this.link = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "urlForHostedProject", {
        get: function () {
            return this.host;
        },
        set: function (value) {
            this.host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "creationDate", {
        get: function () {
            return this.created_at;
        },
        set: function (value) {
            this.created_at = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "projectBadges", {
        get: function () {
            return this.badges;
        },
        set: function (value) {
            this.badges = value;
        },
        enumerable: false,
        configurable: true
    });
    return Project;
}());
exports.default = Project;
//# sourceMappingURL=project.model.js.map