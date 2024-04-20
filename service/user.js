import userModel from "../db/model/userModel.js";
import { verification, bcryption } from "../utils/bcrypt.js";
import { errCode } from "../constant/index.js";
import { generateToken } from "../utils/token.js";

// 用户登陆
export async function login({ name, password }) {
  if (!name || !password) {
    return errCode.other("请输入用户名或密码");
  }
  const user = await userModel.findOne({ name });
  if (user && verification(password, user.password)) {
    const token = generateToken(user._id);
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
    try {
      const hashedPassword = bcryption(password); // 加密密码
      const res = await userModel.create({ name, password: hashedPassword });
      return res._id ? generateToken(user._id) : errCode.w500;
    } catch (error) {
      console.error("注册用户失败", error);
    }
  }
}
