import * as express from "express";
import { ProjectsController } from "../../../controllers/ProjectsController";
const router = express.Router();

router.get("/allProjects", ProjectsController.getAllProjects);

export default router;
