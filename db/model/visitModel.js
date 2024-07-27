import mongoose from "mongoose";
import db from "../index.js";

const Schema = mongoose.Schema;

// 访问量
const visitSchema = new Schema(
  {
    // 访问博客id
    blogId: {
      type: String,
      required: true,
      unique: true,
    },
    // 访问量
    count: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  },
);

const visitModel = db.model("visit", visitSchema);

export default visitModel;
