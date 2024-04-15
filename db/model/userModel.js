import mongoose from "mongoose";
import db from "../index.js";

const Schema = mongoose.Schema;

// 用户表
const userSchema = new Schema({
  // 用户名
  name: {
    type: String,
    required: true,
  },
  // 密码
  password: {
    type: String,
    required: true,
  },
});

const userModel = db.model("user", userSchema);

export default userModel;
