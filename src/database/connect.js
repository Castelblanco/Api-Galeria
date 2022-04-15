"use strict";
import mongoose from "mongoose";
import "../config";
(async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Connected with database");
    }catch(e) {
        console.log("Error to the connect with database");
        console.log(e);
    }
})();