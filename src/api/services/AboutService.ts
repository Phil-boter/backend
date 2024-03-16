import { About } from "../models/about.model";
import db from "../../database/DatabaseConnection";
import LogService from "./LogService";


interface AboutContext {
	aboutInformation(): Promise<About[]>;
}


class AboutService implements AboutContext{
	public async aboutInformation(): Promise<About[]> {
		try {
			let aboutAray: About[] = [];
			const {rows}  = await db.getAboutInformation();
			if(rows) {
				rows.forEach((item: About)=> {
					LogService.logMonitor('AboutService.getAboutInformation', "GET", "success", `about info was loaded`, "");
					aboutAray.push(About.createAboutInformation(item));
				})
			}
            return aboutAray;
		} catch (e) {
			LogService.logMonitor('AboutService.getAboutInformation', "GET" , "ERROR", `${e}`, "")
			throw e;
		}
	}
}

export default new AboutService();
