import express from "express";
import { pdfDetails } from "../controllers/resumeController.js";
const router = express.Router();

router.post("/", pdfDetails);

export default router;
