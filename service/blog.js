import blogModel from "../db/model/blogModel.js";
import { errCode } from "../constant/index.js";

// 获取所有文章
export const getBlogList = async ({
  title,
  tag,
  sort,
  pageSize = 10,
  pageNum = 1,
}) => {
  // 构建查询条件
  const queryOptions = {};

  // 添加模糊查询条件，忽略大小写
  if (title) {
    queryOptions.title = { $regex: title, $options: "i" };
  }
  if (tag) {
    queryOptions.tag = tag;
  }

  const sortOptions = sort || { updatedAt: -1 };
  const pageOptions = (pageNum - 1) * pageSize;

  // 执行查询
  try {
    const result = await blogModel
      .find(queryOptions)
      .sort(sortOptions)
      .skip(pageOptions) // 使用skip和limit进行分页
      .limit(pageSize)
      .lean(); // 使用纯JSON输出

    const totalCount = await blogModel.countDocuments(queryOptions);

    return {
      list: result,
      total: totalCount,
    };
  } catch (error) {
    console.error(error);
    return errCode.w500;
  }
};

// 新建文章
export const addBlog = async ({ title, content, tag }) => {
  // 身份验证应该在这里进行
  if (!title) {
    return errCode.other("没有标题");
  }
  if (!content) {
    return errCode.other("没有内容");
  }

  try {
    return await blogModel.create({ title, content, tag });
  } catch (e) {
    console.error("error", e);
    return errCode.other(e);
  }
};

// 更新文章
export const putBlog = async ({ id, ...params }) => {
  // 身份验证和文章所有权验证应该在这里进行
  if (id) {
    return await blogModel.findByIdAndUpdate(id, params, { new: true });
  } else {
    addBlog(params);
  }
};

// 删除文章
export const delBlog = async ({ id }) => {
  // 身份验证和文章所有权验证应该在这里进行
  if (id) {
    try {
      return await blogModel.findByIdAndRemove(id);
    } catch (error) {
      return errCode.w500;
    }
  } else {
    return errCode.other("id错误");
  }
};
