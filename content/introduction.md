## 文档介绍
 
###房搜搜 手机客户端开发 API 文档

用户头像资源前缀 https://api.fangsosou.com/static/icon/,

其他所有图片资源前缀： https://api.fangsosou.com/static/img/,


#### 部分保护性端口需有效的token才能访问。 如果没有有效token服务器会返回 403， Unauthorized错误。 在发送请求时，请在请求的 Header 内加上 CSRF_TOKEN {{token}}。 前端用户登陆成功后服务器一定会返回有效token，详情可参考用户API文档。

```json
var config = {
    headers: {
        CSRF_TOKEN: token
    }
}
```