import db from "../../database/DatabaseConnection";

interface IAboutData {
	info_text_de: string;
	info_text_en: string;
}


interface AboutContext {
	aboutInformation(): Promise<IAboutData>;
	//selectedProject(id: number): Promise<Project>;
}


class AboutService implements AboutContext{
	public async aboutInformation(): Promise<IAboutData> {
		try {
            return await db.getAboutInformation();
		} catch (e) {
			throw e;
		}
	}
}

export default new AboutService();
