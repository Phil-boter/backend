import { Request, Response, NextFunction } from "express";
import AboutService from "../services/AboutService";

export class AboutController {

	public static async getAbout(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const data = await AboutService.aboutInformation();
			res.send(data).status(200)
		} catch (e) {
			throw e;
		}
	}
}
