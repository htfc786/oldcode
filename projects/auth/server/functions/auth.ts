import cloud from '@lafjs/cloud'
import { createHash } from "crypto";

export default async function (ctx: FunctionContext) {
  // body, query 为请求参数, auth 是授权对象
  const { auth, body, query } = ctx

  // 获取密码，没有为空
  const username = body?.username || "";
  const password = body?.password || "";

  if (!username || !password) return { code: 400, error: "用户名或密码不能为空" };

  // 数据库操作
  const db = cloud.database() //打开数据库
  //查询数据库
  const res = await db
    .collection("outside_users")
    .where({
      username: username,
      password: createHash("sha256").update(password).digest("hex"),
    })
    .getOne();

  if (!res.data) return { code: 400, error: "用户名或密码错误" };

  // 生成jwt
  const user_id = res.data._id;
  const access_token = cloud.getToken({
    uid: user_id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 1,
  });

  console.log("用户登录成功：", user_id, username, password, new Date());

  //返回userid和jwt
  return {
    code: 200,
    msg: "登录成功",
    user_id: user_id,
    access_token: access_token,
  }
}
