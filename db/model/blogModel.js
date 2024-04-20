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
    // 是否为草稿
    isDrafts: {
      type: Boolean,
    },
    createTime: {
      type: Number,
    },
    updateTime: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createTime", updatedAt: "updateTime" },
  },
);

// 添加索引
blogSchema.index({ title: "text", tag: "text" });

const blogModel = db.model("blog", blogSchema);

export default blogModel;
