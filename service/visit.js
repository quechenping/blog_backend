import visitModel from "../db/model/visitModel.js";
import { errCode } from "../constant/index.js";

// 获取文章访问量
export async function getVisit({ blogId }) {
  if (!blogId) {
    return errCode.other("请输入文章id");
  }

  let visit = await visitModel.findOne({ blogId });

  if (!visit) {
    try {
      visit = await visitModel.create({ blogId, count: 1 });
    } catch (error) {
      console.error("创建文章访问量失败", e);
    }
  } else {
    visit.count++;
  }

  await visit.save();

  const { _id: id, count, blogId: bId } = visit;

  return { id, count, blogId: bId };
}
