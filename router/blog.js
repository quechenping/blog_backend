import { errCode } from "../constant/index.js";
import {
  getBlogList,
  getBlog,
  addBlog,
  putBlog,
  delBlog,
} from "../service/blog.js";
import { built } from "../utils/built.js";

const useBlog = (router) => {
  // 获取所有文章
  router.post("/blog/list", async (req, res) => {
    const params = req.body;
    const resp = await getBlogList(params);
    if (resp.errCode) {
      res.send(built(resp));
    } else {
      res.send(built({ data: resp }));
    }
  });

  // 获取单篇文章
  router.get("/blog/:id", async (req, res) => {
    const params = req.params;
    const resp = await getBlog(params);
    if (resp.errCode) {
      res.send(built(resp));
    } else {
      res.send(built({ data: resp }));
    }
  });

  // 新增文章
  router.post("/blog/add", async (req, res) => {
    const params = req.body;
    const resp = await addBlog(params);
    if (resp.errCode) {
      res.send(built(resp));
    } else {
      res.send(built(errCode.w200));
    }
  });

  //编辑文章
  router.post("/blog/put", async (req, res) => {
    const params = req.body;
    const resp = await putBlog(params);
    if (resp.errCode) {
      res.send(built(resp));
    } else {
      res.send(built({ data: resp }));
    }
  });

  // 删除文章
  router.post("/blog/delete", async (req, res) => {
    const params = req.body;
    const resp = await delBlog(params);
    if (resp.errCode) {
      res.send(built(resp));
    } else {
      res.send(built({ data: resp }));
    }
  });
};

export default useBlog;
