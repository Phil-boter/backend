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
			res.status(200).send(data);
		} catch (e) {
			res.status(400).send(e);
		}
	}
}
