const spicedPg = require("spiced-pg");
const {
	postgresDATABASE,
	postgresPIN,
	postgresUSER,
	postgresBASE,
} = require("../secrets.json");

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

	cleanStatusLogs() {
		const q = `DELETE from data_log where created_at < now() - interval '7 days'`;
		return db.query(q);
	}
	// _____________________________ Monitor Log Section End ____________________________________________

    //______________________________ About Section start ________________________________________________
	
	getAboutInformation() {
		const q = `SELECT * FROM about_informations;`
		return db.query(q);
	}

	//______________________________ About Section end __________________________________________________

	//______________________________ Contact Section start ________________________________________________
	
	getContactInformation() {
		const q = `SELECT * FROM contact_informations;`
		return db.query(q);
	}
	
	//______________________________ Contact Section end __________________________________________________

}

export default new DatabaseConnection();
