import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

//加密密码
export function bcryption(e) {
  const hash = bcrypt.hashSync(e, salt);
  return hash;
}

// 解析密码
export function verification(e, hash) {
  return bcrypt.compareSync(e, hash);
}
