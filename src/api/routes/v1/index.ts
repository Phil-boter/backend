import * as express from "express";
import user from "./user";
import projects from "./projects";
import email from "./email";
import about from "./about";
import contact from "./contact";


const router = express.Router();
router.use("/user", user);
router.use("/projects", projects);
router.use("/email", email);
router.use("/about", about);
router.use("/contact", contact);

export default router;
