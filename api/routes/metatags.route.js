// routes/metaTagsRoutes.js
import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createMetaTag,
  getAllMetaTags,
  getMetaTagById,
  updateMetaTag,
  deleteMetaTag,
} from "../controllers/metatags.controller.js";

const router = express.Router();

router.post("/:type", createMetaTag);

router.get("/:type", getAllMetaTags);

router.get("/:type/:id", getMetaTagById);

router.put("/:type/:id", updateMetaTag);

router.delete("/:type/:id", deleteMetaTag);

export default router;
