// 设定返回值
export function built({ errCode = 200, message = null, data = null }) {
  return {
    errCode,
    message,
    data,
  };
}
