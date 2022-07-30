"use strict";
import app from "./app";
import "@babel/polyfill";
import "./database/connect";
app.listen(app.get("port"), ()=>{
    console.log("created server in the 3000");
})