import { Request, Response, NextFunction } from "express";
import ContactService from "../services/ContactService";

export class ContactController {

	public static async getContact(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
            console.log("regqust")
			const data = await ContactService.contactInformation();
            console.log("request", data)
			res.send(data).status(200);
		} catch (e) {
			throw e;
		}
	}
}
