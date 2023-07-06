import { Request, Response, NextFunction } from "express";
import EmailService from "../services/EmailService";

export class EmailController {
	public static async sendEmail(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const { data } = req.body.data;
			await EmailService.sendNewEmail(data);
			res.json({ success: true, msg: "Email was send" }).status(200);
		} catch (e) {
			throw e;
		}
	}
}
