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
	created_at: Date;
}

interface ProjectContext {
	allProjects(): Promise<Project[]>;
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
}

export default new ProjectService();
