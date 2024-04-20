import mongoose from "mongoose";
import { DATA_BASE } from "../constant/config.js";

mongoose.connect(DATA_BASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("连接数据库成功");
});

export default db;
