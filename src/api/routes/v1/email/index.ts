import * as express from "express";
const router = express.Router();
import { EmailController } from "../../../controllers/EmailController";

router.post("/sendEmail", EmailController.sendEmail);

export default router;
