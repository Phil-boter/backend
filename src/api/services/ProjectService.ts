import db from "../../database/DatabaseConnection"

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
 			const data: Project[] = await db.getAllProjects();
			if (data) {
				db.saveStatusLog('ProjectService.AllProjects', "GET", "success", `projets were loaded`, "");
			}
			return data; 	
		} catch (e) {
			db.saveStatusLog('ProjectService.AllProjects', "GET" , "ERROR", `${e}`, "")
			throw e;
		}
	}

	public async selectedProject(id: number): Promise<Project> {
		try {
			const data: Project = await db.getSelectedProject(id);
			db.saveStatusLog('ProjectService.getSeöevctedroject', "GET", "success", `project ${data.id} was loaded`, id.toString());
			return data;
		} catch (e) {
			db.saveStatusLog('ProjectService.getSeöevctedroject', "GET" , "ERROR", `${e}`, id.toString())
			throw e;
		}
	}
}

export default new ProjectService();
