const Users = require("../dao/Dao/userDao");
const bcrypt = require("../utils/bcrypt");
const { errCode } = require("../constant");

// 用户登陆
exports.loginUp = async ({ name, password }) => {
  const res = await Users.findUser({ _name: name });
  if (res) {
    const isSame = bcrypt.verification(password, res._password);
    return isSame ? res : errCode.w400;
  } else {
    return errCode.w404;
  }
};

// 用户注册
exports.signUp = async ({ name: _name, password }) => {
  let _password = bcrypt.bcryption(password); // 加密密码
  const findUser = await Users.findUser({ _name });
  if (findUser) {
    return errCode.w409;
  } else {
    const res = await Users.createUser({ _name, _password });
    return !!res._id ? res._id : errCode.w500;
  }
};
