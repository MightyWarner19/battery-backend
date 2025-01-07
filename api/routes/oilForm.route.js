import express from "express";
import { createOilForm } from "../controllers/oilForm.controller.js";
const router = express.Router();

router.post("/create/oil-form", createOilForm);

export default router;
