import { Request, Response, NextFunction } from "express";
import ProjectService from "../services/ProjectService";

export class ProjectsController {
	public static async getAllProjects(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const data = await ProjectService.allProjects();
			res.send(data).status(200);
		} catch (e) {
			throw e;
		}
	}
}
