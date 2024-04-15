import userModel from "../db/model/userModel.js";
import { verification, bcryption } from "../utils/bcrypt.js";
import { errCode } from "../constant/index.js";
import { generateToken, verifyToken } from "../utils/token.js";

// 用户登陆
export async function login({ name, password }) {
  if (!name || !password) {
    return errCode.other("请输入用户名或密码");
  }
  const user = await userModel.findOne({ name });
  if (user && verification(password, user.password)) {
    const token = generateToken(user._id);
    console.log("tokentoken", token, verifyToken(token));
    return token;
  } else {
    return errCode.w400;
  }
}

// 用户注册
export async function register({ name, password }) {
  if (!name || !password) {
    return errCode.other("请输入用户名或密码");
  }
  const findUser = await userModel.findOne({ name });
  if (findUser) {
    return errCode.w409;
  } else {
    const hashedPassword = bcryption(password); // 加密密码
    const res = await userModel.create({ name, password: hashedPassword });
    return !!res._id ? res._id : errCode.w500;
  }
}
