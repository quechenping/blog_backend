const express = require("express");
const router = express.Router();
const signUp = require("../service/sign");
const { built } = require("../utils/built");

router.get("/", (req, res) => {
  res.send(`hello,world`);
});

// 登陆
router.post("/loginUp", async (req, res) => {
  const { name, password } = req.body;
  const params = { name, password };

  const resp = await signUp.loginUp(params);
  if (resp.errCode) {
    res.send(built({ ...resp }));
  } else {
    res.send(built({ data: resp }));
  }
});

// 注册
router.post("/signUp", async (req, res) => {
  const { name, password } = req.body;
  const params = { name, password };

  const resp = await signUp.signUp(params);
  if (resp.errCode) {
    res.send(built({ ...resp }));
  } else {
    res.send(built({ data: resp }));
  }
});

module.exports = router;
