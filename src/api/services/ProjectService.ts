import { ProjectInterface } from "../interfaces/ProjectInterface";
import Project from "../models/project.model";
import db from "../../database/DatabaseConnection"
import LogService from "./LogService";



interface ProjectContext {
	allProjects(): Promise<Project[]>;
	selectedProject(id: number): Promise<Project>;
}

class ProjectService implements ProjectContext {
	public async allProjects(): Promise<Project[]> {
		try {
			let projectsArray: Project[] = [];
 			const {rows} = await db.getAllProjects();	
			if (rows) {		
				LogService.logMonitor('ProjectService.AllProjects', "GET", "success", `projets were loaded`, "");
				rows.forEach((item: ProjectInterface) => {
					projectsArray.push(Project.createProject(item));
				});		
			}
			return projectsArray;
			
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
