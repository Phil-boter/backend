import * as express from "express";
import user from "./user";
import projects from "./projects";

const router = express.Router();
router.use("/user", user);
router.use("/projects", projects);

export default router;
