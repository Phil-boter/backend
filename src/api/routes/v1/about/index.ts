import * as express from "express";
import { AboutController } from "../../../controllers/AboutController";
const router = express.Router();

router.get("/getAboutInfo", AboutController.getAbout);


export default router;