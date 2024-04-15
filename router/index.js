import express from "express";
import useUser from "./user.js";
import useBlog from "./blog.js";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(`hello,world`);
});

useUser(router);
useBlog(router);

export default router;
