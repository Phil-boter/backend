import { Request, Response, NextFunction } from "express";
import UserService from "../services/UserService";

export class UserController {
	public static getUserProfileData(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const data = UserService.userProfileData();
			res.status(200).send(data);
		} catch (e) {
			res.status(400).send(e);
		}
	}
}
