export const errCode = {
  other: (message) => ({
    errCode: 500,
    message,
  }),
  w200: {
    errCode: 200,
    message: "成功",
  },
  w400: {
    errCode: 400,
    message: "密码错误",
  },
  w401: {
    errCode: 401,
    message: "请登录",
  },
  w409: {
    errCode: 409,
    message: "用户已存在",
  },
  w500: {
    errCode: 500,
    message: "服务异常",
  },
};
