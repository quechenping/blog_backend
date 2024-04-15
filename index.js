import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router/index.js";

const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 处理跨域
app.use(cors());

// 挂载路由
app.use("/", router);

// 处理404地址
app.use("*", function (_req, res) {
  res.status(404);
  res.send("not Found");
});

app.listen(port, () => {
  console.log("服务已启动");
});
