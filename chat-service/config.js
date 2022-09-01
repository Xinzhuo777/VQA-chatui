module.exports = {
  // 密码MD5加密参数
  cryptoKey: 'lingshulian',

  // 数据库配置
  dbConfig: {
      host: "127.0.0.1",
      port:3306,
      user: "root", // 数据库登录用户
      password: '123456', // 数据库登录密码
      database: "db1" // 数据库名称
  },

  // s3对象存储配置 https://www.lingshulian.com 
  s3Config: {
    config: {
      credentials: {
        accessKeyId: '8be5dce2593be8d3ce5e629ead8c6495', // secretId
        secretAccessKey: '3fc37dc5208ee47d572b02c236d15c49fd04c604b0967a10ce0d642e8f8174fd' // secretKey
      },
      endpoint: 'https://s3-us-east-1.ossfiles.com', // https:// + 获取的的端点
      region: 'us-east-1'
    },
    // 上传目录 可自定义
    path: 'chat',
    // 上传桶
    bucket: "rootlxz" // 存储桶
  },

  // jwt认证配置
  jwtConfig: {
    // 加密和解密 Token 的秘钥
    secret: 'lingshulian',
    // 加密方式
    algorithms: ["HS256"]
  },

  // token过期时间
  expiresIn: '8h',

  // 发送邮箱配置
  emailConfig: {
    host: "",//邮箱服务器  这里我用的QQ邮箱
    port: 465,//邮箱使用端口
    secure: true,//是否使用默认的465端口
    auth: {
      user: "", // 发送方邮箱地址
      pass: "bdyxgqesqtnnebij" // smtp 验证码
    }
  },
  
  // 用户默认头像配置
  newUserConfig: {
    avatar: ["/avatar/1.jpg","/avatar/2.jpg","/avatar/3.jpg","/avatar/4.jpg","/avatar/5.jpg"],
  }
}