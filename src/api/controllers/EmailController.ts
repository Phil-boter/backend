import { Request, Response, NextFunction } from "express";
import EmailService from "../services/EmailService";

export class EmailController {
	public static async sendEmail(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const { data } = req.body;
			const email = await EmailService.sendNewEmail(data);
				return res.status(200).json({
					success: true,
					msg: "Email was send" 
				});
		} catch (e) {
			res.status(400).send(e);
		}
	}
}
