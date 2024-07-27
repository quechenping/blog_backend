import express from "express";
import useUser from "./user.js";
import useBlog from "./blog.js";
import useVisit from "./visit.js";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(`hello,world`);
});

useUser(router);
useBlog(router);
useVisit(router);

export default router;
