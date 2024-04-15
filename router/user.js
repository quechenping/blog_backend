import { login, register } from "../service/user.js";
import { built } from "../utils/built.js";

const useUser = (router) => {
  // 登陆
  router.post("/login", async (req, res) => {
    const params = req.body;
    const resp = await login(params);
    if (resp.errCode) {
      res.send(built({ ...resp }));
    } else {
      res.send(built({ data: resp }));
    }
  });

  // 注册
  router.post("/register", async (req, res) => {
    const params = req.body;
    const resp = await register(params);
    if (resp.errCode) {
      res.send(built({ ...resp }));
    } else {
      res.send(built({ data: resp }));
    }
  });
};

export default useUser;
