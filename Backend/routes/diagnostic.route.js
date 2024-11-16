import express from "express";
import { postDiagnostic, getAllDiagnostic, getDiagnostic, deleteDiagnostic } from "../controllers/diagnostic.controller.js";

const router = express.Router();

router.post("/", postDiagnostic);

router.get("/", getAllDiagnostic);

router.get("/single", getDiagnostic);

router.delete("/", deleteDiagnostic);

export default router;