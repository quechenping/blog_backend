const mongoose = require("mongoose");
const db = require("../db");
const Schema = mongoose.Schema;

// 用户表
const userSchema = new Schema({
  _name: { type: String }, // 用户名
  _password: { type: String }, // 密码
});

module.exports = db.model("user", userSchema);
