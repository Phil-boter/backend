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
			res.status(200).send(data);
		} catch (e) {
			res.status(400).send(e);
		}
	}
}
