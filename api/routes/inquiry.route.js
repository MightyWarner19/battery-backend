import express from "express";
import { create, getinquirys } from "../controllers/inquiry.controller.js";

const router = express.Router();

router.post("/create/inquery", create);
router.get("/getinquirys", getinquirys);
// router.delete('/deleteinquiry/:inquiryId', deleteinquiry)

export default router;
