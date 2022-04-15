"use strict";
import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const schema = new Schema({
          img: {type: Buffer, required: true},
          wordKey: {type: String, required: true},
          type: {type: String, required: true}
      });

schema.plugin(mongoosePaginate);
export default model("image", schema);