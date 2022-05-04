import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import path from "path";
import { Routes } from "./api/routes";

class App {
	public app: Application;
	public routePrv: Routes = new Routes();

	constructor() {
		this.app = express();
		this.config();
		this.routePrv.routes(this.app);
	}

	private config(): void {
		this.app.use((req: Request, res: Response, next: NextFunction) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header(
				"Access-Control-Allow-Methods",
				"GET,POST,DELETE,OPTIONS,PUT"
			);
			res.header("Access-Control-Allow-Headers", "*");
			next();
		});
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));

		if (process.env.NODE_ENV === "production") {
			this.app.use(
				express.static(path.join(__dirname, "..", "frontend", "build"))
			);

			this.app.get("*", (req, res) => {
				res.sendFile(
					path.resolve(
						__dirname,
						"..",
						"frontend",
						"build",
						"index.html"
					)
				);
			});
		}
	}
}

export default new App().app;
