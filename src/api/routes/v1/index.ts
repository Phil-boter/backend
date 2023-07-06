import * as express from "express";
import user from "./user";
import projects from "./projects";
import email from "./email";

const router = express.Router();
router.use("/user", user);
router.use("/projects", projects);
router.use("/email", email);

export default router;
