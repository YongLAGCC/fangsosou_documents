### 普通用户登录

普通用户登录

```endpoint
POST /api/v1/user/auth/login/sms
```
Property | Description
---|---
`phone` | (required) 电话号码
`password` | (required) 密码


#### Example response

```json
{
    "success": true,
    "token": "{JWT TOKEN}"
}
```

#### Status Code

```json
200 OK
500 Server Error
```

### 创建新用户(1/2)

创建新用户第一步，提交手机号码查询是否重复

```endpoint
POST /api/v1/user/auth/signup/sms
```


Property | Description
---|---
`phone` | (required) 电话号码 默认区号为 +1

#### Example response

```json
{
    "carrier": "T-Mobile USA, Inc.",
    "is_cellphone": true,
    "message": "Text message sent to +1 347-825-7667.",
    "seconds_to_expire": 599,
    "uuid": "31571100-de46-0135-96e4-126cf2d1e912",
    "success": true
}
```
#### Status Code

```json
200 OK
500 Server Error
```

### 创建新用户 (2/2)

创建新用户第二步，提交验证码查询是否正确，如果正确创建用户

```endpoint
POST /api/v1/user/auth/signup/verify
```


Property | Description
---|---
`phone` | (required) 电话号码 默认区号为 +1
`password` | (required) 密码
`code` | (required) 验证码

#### Example response

```json
{
    "success": true,
    "data": {
        "type": "user",
        "email": "/",
        "phone": "6466397087",
        "password": "$2a$10$SIPGQLIDyJILhZOdl.sWC.qDUVIoax6Z9tkmW9yBHWLUAIxomln0S",
        "icon": {
            "file": "default",
            "mimetype": "image/png"
        },
        "created": "2018-01-18T06:26:27.743Z",
        "active": true,
        "_id": "5a603e13991dba06c04ead34"
    }
}

```
#### Status Code

```json
200 OK
500 Server Error
```

### 忘记密码(1/3)

忘记密码第一步，提交手机号码查询是否存在

```endpoint
POST /api/v1/verify/agent/phone
```


Property | Description
---|---
`phone` | (required) 电话号码 默认区号为 +1

#### Example response

```json
{
    "carrier": "T-Mobile USA, Inc.",
    "is_cellphone": true,
    "message": "Text message sent to +1 347-825-7667.",
    "seconds_to_expire": 599,
    "uuid": "31571100-de46-0135-96e4-126cf2d1e912",
    "success": true
}
```
#### Status Code

```json
200 OK
500 Server Error
```

### 忘记密码 (2/3)

忘记密码第二步，提交验证码查询是否正确，如果正确返回true

```endpoint
POST /api/v1/user/verify/agent/code
```


Property | Description
---|---
`phone` | (required) 电话号码 默认区号为 +1
`code` | (required) 验证码

#### Example response

```json
{
    "success": true,
    "data": {
        "type": "user",
        "email": "/",
        "phone": "6466397087",
        "password": "$2a$10$SIPGQLIDyJILhZOdl.sWC.qDUVIoax6Z9tkmW9yBHWLUAIxomln0S",
        "icon": {
            "file": "default",
            "mimetype": "image/png"
        },
        "created": "2018-01-18T06:26:27.743Z",
        "active": true,
        "_id": "5a603e13991dba06c04ead34"
    }
}

```
#### Status Code

```json
200 OK
500 Server Error
```

### 忘记密码 (3/3)

忘记密码第三步，提交更改后的密码，提交成功后

```endpoint
POST /api/v1/user/verify/agent/password
```


Property | Description
---|---
`password` | (required) 密码

#### Example response

```json
{
    "success": true,
    "data": {
        //用户对象
    }
}

```
#### Status Code

```json
200 OK
500 Server Error
```

### Logout 

Delete "CSRF_TOKEN" cookie on the server-side (Logout)

```endpoint
GET /api/v1/user/auth/logout
```

#### Example response

```json
{
    "success": true
}
```

### View Agent Info By AgentID 

View Agent Info with AgentID (6位数)

icon file will be on `https://api.fangsosou.com/static/icon/{filename}`

Request for Agent Info with Agent's 6-digit unique code.

Example AgentID: '123455'


```html
//传回的图片为二进制文件，web端的做法是：
<img alt="userAvatar" src="https://api.fangsosou.com/static/icon/profileImage-1515098664799">
```

```endpoint
GET /api/v1/user/info/findAgentById/{AgentID}
```

#### Example response

```json
{
    "success": true,
    "data": {
        "_id": "{OBJID}",
        "type": "agent",
        "agentID": "{AgentID}",
        "username": "{Agent's Username}",
        "email": "{Agent's Email}",
        "company": "{Agent's Company Name}",
        "phone": "{Agent's Phone Number}",
        "street": "{Agent's Office Street}",
        "city": "{Agent's Office City}",
        "state": "{Agent's Office state}",
        "zip": "{Agent's Office zipcode}",
        "url": "{Agent's Company URL}",
        "icon": {
            "file": "{icon file}",
            "mimetype": "{icon type}"
        },
        "card": {
            "file": "{icon file}",
            "mimetype": "{icon type}"
        },
        "wechat": "wechat ID",
        "view": "{view count}",
        "qr_code": "{BASE64 Encoded QR code}"
    }
}

```
#### Status Code

```json
200 OK
404 Agent Not Found
500 Server Error
```

### Edit User Icon

Edit User Icon when a vaild JWT token is present

```endpoint
POST /api/v1/user/info/edit/icon
```

Property | Description
---|---
`icon` | (required) must be an Image file

#### Example response

```json
{
 "success": true,
  "message": {
    "updated":true,
    "newIcon": {
        "file": "{filename}",
        "mimetype": "{filetype}"
    }
  }
}
```

#### Status Code

```json
200 OK
403 Invaild Token
500 Server Error
```

### 微信注册

接受一个微信 OPENID 来注册新用户

```endpoint
POST /api/v1/user/auth/signup/wechat
```

Property | Description
---|---
`wechatID` | (required) 微信 OPENID
`avatar` | (required) 微信用户传回的头像
#### Example response

```json
{
    "username": {微信提供的用户名},
    "type": "wechatUser",
    "icon": {
        "file": {微信用户头像},
        "mimetype": 'image/png'
    },
    "created": {创建日期},
    "active": true
    }
```

#### Status Code

```json
200 OK
403 Invaild Token
500 Server Error
```

### 微信登录

接受一个微信 OPENID 来登录

```endpoint
POST /api/v1/user/auth/login/wechat
```

Property | Description
---|---
`wechatID` | (required) 微信 OPENID
#### Example response

```json
{
    "success": true,
    "token": {用户 token}
}
```

#### Status Code

```json
200 OK
403 Invaild Token
500 Server Error
```
