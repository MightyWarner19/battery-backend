import express from "express";
import {
  createHomepageForm,
  createServiceForm,
  createProductForm,
} from "../controllers/forms.controller.js";
const router = express.Router();

router.post("/create/form", createHomepageForm);
router.post("/create/service", createServiceForm);
router.post("/create/product", createProductForm);

export default router;
