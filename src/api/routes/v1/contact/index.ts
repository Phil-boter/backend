import * as express from "express";
import { ContactController } from "../../../controllers/ContactController";
const router = express.Router();

router.get("/getContactInfo", ContactController.getContact);


export default router;