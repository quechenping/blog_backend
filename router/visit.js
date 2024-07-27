import { getVisit } from "../service/visit.js";
import { built } from "../utils/built.js";

const useVisit = (router) => {
  // 查询访问量
  router.post("/visit/get", async (req, res) => {
    const params = req.body;
    const resp = await getVisit(params);
    if (resp.errCode) {
      res.send(built({ ...resp }));
    } else {
      res.send(built({ data: resp }));
    }
  });
};

export default useVisit;
