import db from "../../database/DatabaseConnection"
import LogService from "./LogService";

interface Project {
	id: number;
	title: string;
	title_second: string;
	description_de: string;
	description_en: string;
	technology_de: string;
	technology_en: string;
	main_image: string;
	images: Array<[]>;
	host: string;
	link: string;
	badges: Array<[]>;
	created_at: Date;
}

interface ProjectContext {
	allProjects(): Promise<Project[]>;
	selectedProject(id: number): Promise<Project>;
}

class ProjectService implements ProjectContext {
	public async allProjects(): Promise<Project[]> {
		try {
 			const {rows} = await db.getAllProjects();
			if (rows) {
				LogService.logMonitor('ProjectService.AllProjects', "GET", "success", `projets were loaded`, "");
			}
			return rows; 	
		} catch (e) {
			LogService.logMonitor('ProjectService.AllProjects', "GET" , "ERROR", `${e}`, "")
			throw e;
		}
	}

	public async selectedProject(id: number): Promise<Project> {
		try {
			const {rows} = await db.getSelectedProject(id);
			LogService.logMonitor('ProjectService.getSeöevctedroject', "GET", "success", `project ${id} was loaded`, id.toString());
			return rows;
		} catch (e) {
			LogService.logMonitor('ProjectService.getSeöevctedroject', "GET" , "ERROR", `${e}`, id.toString())
			throw e;
		}
	}
}

export default new ProjectService();
