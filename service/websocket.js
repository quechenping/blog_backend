const Ws = require("ws");

const server = new Ws.Server({ port: 8001 });

// 打开
server.on("open", (e) => {
  console.log("server open");
});

// 关闭
server.on("close", (e) => {
  console.log("server close");
});

//报错
server.on("error", (e) => {
  console.log("server error", error);
});

//连接
server.on("connection", (ws) => {
  ws.on("message", (e) => {
    console.log("message", e);
    // 心跳检测
    if (e === "HeartReconnect") {
      ws.send(e);
    }
  });
});

module.exports = server;
