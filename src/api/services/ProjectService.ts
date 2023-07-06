import { request } from "express";
import db from "../../database/ProjectDatabase";

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
			return data;
		} catch (e) {
			throw e;
		}
	}

	public async selectedProject(id: string): Promise<Project> {
		try {
			const data: Project = await db.getSelectedProject(id);
			return data;
		} catch (e) {
			throw e;
		}
	}
}

export default new ProjectService();
