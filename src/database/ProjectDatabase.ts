const spicedPg = require("spiced-pg");
const {
	postgresDATABASE,
	postgresPIN,
	postgresUSER,
	postgresBASE,
} = require("../../secrets.json");

const db = spicedPg(
	process.env.DATABASE_URL ||
		`${postgresBASE}:${postgresUSER}${postgresPIN}/${postgresDATABASE}`
);

class ProjecDatabase {
	getAllProjects() {
		const q = `SELECT projects.id, title,title_second, description_de, description_en, technology_de, technology_en, main_image, images, link, host, projects.created_at, badge FROM projects LEFT JOIN badges ON projects.title = badge_id ORDER BY projects.id;`;
		return db.query(q);
	}

	getSelectedProject(id: string) {
		const q = `SELECT projects.id, title,title_second, description_de, description_en, technology_de, technology_en, main_image, images, link, host, projects.created_at, badge FROM projects LEFT JOIN badges ON projects.title = badge_id where projects.id = $1;`
		const params = [id];
		return db.query(q, params);
	}
}

export default new ProjecDatabase();
