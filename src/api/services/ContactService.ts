import db from "../../database/DatabaseConnection";

interface IContactData {
	id: number;
	info_text_de: string;
	info_text_en: string;
	created_at: Date;
}


interface ContactContext {
	contactInformation(): Promise<IContactData>;
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