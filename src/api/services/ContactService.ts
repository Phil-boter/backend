import db from "../../database/DatabaseConnection";

interface IContactData {
	info_text_de: string;
	info_text_en: string;
    badges: JSON;
}


interface ContactContext {
	contactInformation(): Promise<IContactData>;
	//selectedProject(id: number): Promise<Project>;
}


class ContactService implements ContactContext{
	public async contactInformation(): Promise<IContactData> {
		try {
            return await db.getContactInformation();
		} catch (e) {
			throw e;
		}
	}
}

export default new ContactService();