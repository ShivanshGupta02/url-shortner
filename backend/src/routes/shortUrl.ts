import express from "express";
import {createUrl, getAllUrl, getUrl, deleteUrl } from "../controllers/controller"
const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:su", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;