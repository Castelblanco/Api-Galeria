"use strict";
import express from "express";
import router from "./router/router";
import cors from "cors";
const app = express();

// Middleware
app.set("port", process.env.PORT || 3000);
//Setting
app.use(express.json())
   .use(express.urlencoded({extended: false}))
   .use(cors({
      origin: "https://castel-galeria-publica.netlify.app",
      optionsSuccessStatus: 200
   }));

// Router
app.use(router);

export default app;
