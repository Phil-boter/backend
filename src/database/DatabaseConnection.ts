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

class DatabaseConnection {

	// _____________________________  Project Section Start ____________________________________________
	getAllProjects() {
		const q = `SELECT projects.id, title,title_second, description_de, description_en, technology_de, technology_en, main_image, images, link, host, projects.created_at, badge FROM projects LEFT JOIN badges ON projects.title = badge_id ORDER BY projects.id;`;
		return db.query(q);
	}

	getSelectedProject(id: number) {
		const q = `SELECT projects.id, title,title_second, description_de, description_en, technology_de, technology_en, main_image, images, link, host, projects.created_at, badge FROM projects LEFT JOIN badges ON projects.title = badge_id where projects.id = $1;`
		const params = [id];
		return db.query(q, params);
	}
	// _____________________________ Project Section End ________________________________________________
	

	// _____________________________ Monitor Log Sectionn Start _________________________________________

	saveStatusLog(method: string, action: string, status: string , logMessage: string, param: string) {
		const q = `INSERT into data_log(method, action, status, log_message, params) VALUES ($1, $2, $3, $4, $5)`;
		const params = [method, action, status, logMessage, param];
		return db.query(q, params);
	}
	// _____________________________ Monitor Log Section End ____________________________________________
}

export default new DatabaseConnection();