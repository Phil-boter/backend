import { Request, Response, NextFunction } from "express";
import ContactService from "../services/ContactService";

export class ContactController {

	public static async getContact(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const data = await ContactService.contactInformation();
			res.send(data).status(200);		
		} catch (e) {
			throw e;
		}
	}
}
