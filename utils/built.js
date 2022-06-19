// 设定返回值
exports.built = ({ errCode = 200, message = null, data = null }) => {
  return {
    errCode,
    message,
    data,
  };
};
