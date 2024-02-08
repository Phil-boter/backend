import db from "../../database/DatabaseConnection";
import LogService from "./LogService";

interface IAboutData {
	id: number;
	info_text_de: string;
	info_text_en: string;
	badges: JSON;
	created_at: Date;
}


interface AboutContext {
	aboutInformation(): Promise<IAboutData>;
}


class AboutService implements AboutContext{
	public async aboutInformation(): Promise<IAboutData> {
		try {
			const {rows}  = await db.getAboutInformation();
			LogService.logMonitor('AboutService.getAboutInformation', "GET", "success", `about info was loaded`, "");
            return rows;
		} catch (e) {
			LogService.logMonitor('AboutService.getAboutInformation', "GET" , "ERROR", `${e}`, "")
			throw e;
		}
	}
}

export default new AboutService();
