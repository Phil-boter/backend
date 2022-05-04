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
		const q = `SELECT * FROM projects ORDER BY id`;
		return db.query(q);
	}

	getProject(id: number) {
		const q = `SELECT * FROM projects WHERE id = $1`;
		const params = [id];
		return db.query(q, params);
	}
}

export default new ProjecDatabase();
