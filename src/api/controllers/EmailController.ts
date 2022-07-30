import { Request, Response, NextFunction } from "express";
import EmailService from "../services/EmailService";

export class EmailController {
	public static async sendEmail(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			console.log("req", req.body);
			const data = req.body;
			const answer = await EmailService.sendNewEmail(data);
			console.log("answer", answer);
			res.send("Email was send").status(200);
		} catch (e) {
			throw e;
		}
	}
}
