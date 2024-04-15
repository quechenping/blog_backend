// 数据库连接地址
const DATA_BASE =
  "mongodb+srv://hush:qcp19991004.@blog-database.6kxxvhb.mongodb.net/blog?retryWrites=true&w=majority&appName=blog-database";

// token加密key
const TOKEN_KEY = "secretKey";

// token过期时间
const TOKEN_EXPIRE = "1h";

export { DATA_BASE, TOKEN_KEY, TOKEN_EXPIRE };
