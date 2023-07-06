import * as express from "express";
import { ProjectsController } from "../../../controllers/ProjectsController";
const router = express.Router();

router.get("/allProjects", ProjectsController.getAllProjects);
router.get("/selectedProject", ProjectsController.getSelectedProject)

export default router;
