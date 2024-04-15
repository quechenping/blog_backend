import mongoose from "mongoose";
import db from "../index.js";

const Schema = mongoose.Schema;

// 博客表
const blogSchema = new Schema(
  {
    // 博客标题
    title: {
      type: String,
      required: true,
    },
    // 博客内容
    content: {
      type: String,
      required: true,
    },
    // 创作人
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    // 标签
    tag: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// 添加索引
blogSchema.index({ title: "text", tag: "text" });

const blogModel = db.model("blog", blogSchema);

export default blogModel;
