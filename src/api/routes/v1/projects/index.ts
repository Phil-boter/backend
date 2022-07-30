import * as express from "express";
import { ProjectsController } from "../../../controllers/ProjectsController";
const router = express.Router();

router.get("/allProjects", ProjectsController.getAllProjects);
router.get("/singleProject", ProjectsController.singleProject);

export default router;
