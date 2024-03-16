import db from "../../database/DatabaseConnection";
import LogService from "./LogService";
import { Contact } from "../models/contact.model";

interface ContactContext {
	contactInformation(): Promise<Contact[]>;
}


class ContactService implements ContactContext{
	public async contactInformation(): Promise<Contact[]> {
		try {
			let contactArray: Contact[] = [];
			const {rows} = await db.getContactInformation();
			if(rows) {
				rows.forEach((item: Contact)=> {
					LogService.logMonitor('ContactService.getContactInformation', "GET", "success", `contact info was loaded`, "");
					contactArray.push(Contact.createContactInformation(item));
				})
			}
            return contactArray;
		} catch (e) {
			LogService.logMonitor('ContactService.getContactInformation', "GET" , "ERROR", `${e}`, "")
			throw e;
		}
	}
}

export default new ContactService();