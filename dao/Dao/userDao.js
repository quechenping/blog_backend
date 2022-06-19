const userModel = require("../model/userModel");

// 新建用户
exports.createUser = async (params) => {
  return await userModel.create(params);
};

// 查询用户
exports.findUser = async (params) => {
  return await userModel.findOne(params);
};
