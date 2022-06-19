const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

//加密密码
exports.bcryption = (e) => {
  const hash = bcrypt.hashSync(e, salt);
  return hash;
};

// 解析密码
exports.verification = (e, hash) => {
  return bcrypt.compareSync(e, hash);
};
