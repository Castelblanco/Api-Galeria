"use strict";
import fs from "node:fs";
import image from "../database/Schema";
import { getPaginate } from "../libs/getPaginate";

async function getImg(req, res){
    try{
      const { autorized, wordKey, page, size } = req.query,
            { limit, offset } = getPaginate(page, size),
            condition = wordKey ?{
              wordKey: {$regex: new RegExp(wordKey), $options:"i"}
            } :{};
        
        let imagen = await image.paginate(condition, {offset, limit}),
            img = imagen.docs.map(i =>{ return { img: i.img, type: i.type }});
        
        res.status(200).json({img});

    }catch(e){
      res.status(500).json({ message: e.message })
    }
}

async function postImg (req, res){
    try{
      const { path, mimetype } = req.file,
          { wordKey } = req.body,
          img = fs.readFileSync(path);
        
        if (wordKey && wordKey.length > 0){
          if (mimetype.indexOf("image") != -1){

            const imagen = new image({wordKey, img, type: mimetype});
            await imagen.save();
            res.status(200).json({message: "save image"});
            fs.unlinkSync(path);

          }else res.status(400).json({message: "File not valid, it has to be an image"})

        }else res.status(400).json({message: "wordKey no valid"});

    }catch(e){
      res.status(400).json({ message: "Error in the request", data: e});
    }
}

const controllers = { getImg, postImg }

export default controllers;
