import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { expressjwt } from "express-jwt";
import router from "./router/index.js";
import { TOKEN_KEY, TOKEN_ALGORITHMS } from "./constant/config.js";
import { errCode } from "./constant/index.js";

const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 处理跨域
app.use(cors());

// 处理权限
app.use(
  expressjwt({
    secret: TOKEN_KEY,
    algorithms: TOKEN_ALGORITHMS,
  }).unless({
    path: [
      "/",
      "/login",
      "/signup",
      "/blog/list",
      "/blog/",
      { url: /^\/blog\/.*/, methods: ["GET"] },
    ],
  }),
);

// 全局错误处理中间件，捕获解析JWT失败产生的错误
app.use((err, _req, res, _next) => {
  // token解析失败
  if (err.name === "UnauthorizedError") {
    res.status(401);
    res.send(errCode.w401);
  }
});

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
