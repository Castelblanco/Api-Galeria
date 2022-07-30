"use strict";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
          destination: path.join(__dirname, "./img"),
          filename: (req, file, cb)=>{
              let ext = file.originalname.split(".").pop();
              cb(null, `${Date.now()}.${ext}`);
          }
      }),
      upload = multer({storage}).single("img");
export default upload;