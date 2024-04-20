import jwt from "jsonwebtoken";
import { TOKEN_KEY, TOKEN_EXPIRE } from "../constant/config.js";

export const generateToken = (id) => {
  return jwt.sign({ userId: id }, TOKEN_KEY, {
    expiresIn: TOKEN_EXPIRE,
  });
};

export const verifyToken = (token) => {
  const res = jwt.verify(token, TOKEN_KEY);
  return res;
};
