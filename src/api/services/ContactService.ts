import db from "../../database/DatabaseConnection";
import LogService from "./LogService";

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
			const {rows} = await db.getContactInformation();
			LogService.logMonitor('ContactService.getContactInformation', "GET", "success", `contact info was loaded`, "");
            return rows
		} catch (e) {
			LogService.logMonitor('ContactService.getContactInformation', "GET" , "ERROR", `${e}`, "")
			throw e;
		}
	}
}

export default new ContactService();