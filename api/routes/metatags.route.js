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

router.post("/:type", verifyToken, createMetaTag);

router.get("/:type", verifyToken, getAllMetaTags);

router.get("/:type/:id", verifyToken, getMetaTagById);

router.put("/:type/:id", verifyToken, updateMetaTag);

router.delete("/:type/:id", verifyToken, deleteMetaTag);

export default router;
