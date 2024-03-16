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
			if(data) {
				res.status(200).send(data);
			}
		} catch (e) {
			res.status(400).send(e);
		}
	}

	public static async getSelectedProject(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const queryId: any = req.query.id;
			const id: number = parseInt(queryId);
			const data = await ProjectService.selectedProject(id);
			res.status(200).send(data);
		} catch (e) {
			res.status(400).send(e);
		}
	}
}
