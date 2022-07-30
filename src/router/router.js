"use srtict";
import { Router } from "express";
import upload from "../multer";
import controllers from "../controllers/controllers";
const router = Router();

router.get("/", controllers.getImg)
      .post("/upload.img", upload, controllers.postImg)

export default router;