
### 读取单个房源详情

用房源ID 请求房源详情

带星号的字段都是新增或更新后的字段，请务必检查更新你的对应接口

```endpoint
GET /api/v1/house/detail/{OBJID}
```

#### Example Response
```json
{
    "_id": "{OBJID}",
    "type": string, //买或卖
    "agentID": {
        "agentID": string, //中介ID
        "agentAvatar": {
            //中介头像
        },
        "agentName": string, //中介名字
        "agentPhone": string, //中介电话 ***********************************
        "agentCompany" : string //中介公司 ***********************************
    },
    "detail": {
        "title": string, //标题
        "description": string, //介绍
        "type": string, //房屋类型
        "price": number, //价格
        "family": string, //几单元 *********************************
        "lotSize": string, //总面积 *********************************
        "buildingSize": number, //房屋面积 *********************************
        "beds": number, //卧室
        "baths": number, //卫生间
        "build": string, //建筑年份
        "hasAttic": boolean, //有阁楼 *********************************
        "hasBasement": boolean, //有地下室 *********************************
        "comcharge": number, //公寓税 *********************************
        "maitfee": number, //管理费 *********************************
        "fliptax": number, //翻转税 *********************************
        "rooms": number, //房间数量 *********************************
        "material": string, //建筑材料 *********************************
        "propTax": number, //地产税 *********************************
        "house_images":[
            {
                "fieldname": "{field name}",
                "originalname": "{original name}",
                "encoding": "{encoding}",
                "mimetype": "{mimet ype}",
                "destination": "{destination}",
                "filename": "{file name}",
                "path": "{path}",
                "size": "{size}"
            }
            //JSON Array
        ]
    },
    "location": {
        "street": "{street}",
        "city": "{city}",
        "county": "{county}",
        "gpcode": "{google place code}",
        "state": "{State}",
        "zipcode": "{Zipcode}",
        "zoning": "{Gov Zone}" //划区 *********************************
    },
    "status": {
        "active": "{true||false}",
        "views": number //浏览量 *********************************
    },
    "created": "{current Timestamp}",
    "lastUpdated": "{last updated Timestamp}"
}
```
#### Status Code

```json
200 OK
404 House Not Found
500 Server Error
```


### Fetch Listing (filter)  

get property listing

filter house listing by posting parameter 

```endpoint
POST /api/v1/listing/filterHouseByParams
```
Property | Description
---|---
`type` | (required) buy / rent
`requestPage` | (required) the page needed 
`county` | (post parameter not required) county
`city` | (post parameter not required) city
`priceMin` | (post parameter not required) the price Min value
`priceMax` | (post parameter not required) the price Max value
`propertyType` | (post parameter not required) property type of house
`family` | (post parameter not required) the value of total family
`beds` | (post parameter not required) the value of beds

#### Example Response
```json
{
    "pageCount": "{total page number of house listing page}",
    "results": [
        {
            "_id": "{OBJID}",
            "type": "{type}",
            "agentID": "{agent Id}",
            "detail": {
                "title": "{title}",
                "description": "{description}",
                "type": "{type}",
                "price": "{price}",
                "totalArea": "{total area}",
                "beds": "{total beds}",
                "baths": "{total baths}",
                "build": "{build time}",
                "credit_check": "{true or false}",
                "income_report": "{true or false}",
                "background_check": "{true or false}",
                "house_images":[
                    {
                        "fieldname": "{field name}",
                        "originalname": "{original name}",
                        "encoding": "{encoding}",
                        "mimetype": "{mimet ype}",
                        "destination": "{destination}",
                        "filename": "{file name}",
                        "path": "{path}",
                        "size": "{size}"
                    }
                    //JSON Array
                ]
            },
            "location": {
                "street": "{street}",
                "city": "{city}",
                "county": "{county}",
                "gpcode": "{google place code}",
                "state": "{State}",
                "zipcode": "{Zipcode}",
                "zone": "{Gov Zone}"
            },
            "status": {
                "active": "{true||false}"
            },
            "created": "{current Timestamp}",
            "lastUpdated": "{last updated Timestamp}",
            "view": "{totle view}"
        },
        ... JSON Array
    ]
}
```
#### Status Code

```json
200 OK
404 House Not Found
500 Server Error
```


### 中介ID找房源 


```endpoint
POST /api/v1/listing/fetchHouseByAgentID
```
字段 | 描述
---|---
`agentID` | (必须) 中介UUID
`page` | (必须) 页数

#### Example Response
```json
{
    "pageCount": "{total page number of house listing page}",
    "results": [
        {
            "_id": "{OBJID}",
            "type": "{type}",
            "agentID": "{agent Id}",
            "detail": {
                "title": "{title}",
                "description": "{description}",
                "type": "{type}",
                "price": "{price}",
                "totalArea": "{total area}",
                "beds": "{total beds}",
                "baths": "{total baths}",
                "build": "{build time}",
                "credit_check": "{true or false}",
                "income_report": "{true or false}",
                "background_check": "{true or false}",
                "house_images":[
                    {
                        "fieldname": "{field name}",
                        "originalname": "{original name}",
                        "encoding": "{encoding}",
                        "mimetype": "{mimet ype}",
                        "destination": "{destination}",
                        "filename": "{file name}",
                        "path": "{path}",
                        "size": "{size}"
                    }
                    //JSON Array
                ]
            },
            "location": {
                "street": "{street}",
                "city": "{city}",
                "county": "{county}",
                "gpcode": "{google place code}",
                "state": "{State}",
                "zipcode": "{Zipcode}",
                "zone": "{Gov Zone}"
            },
            "status": {
                "active": "{true||false}"
            },
            "created": "{current Timestamp}",
            "lastUpdated": "{last updated Timestamp}",
            "view": "{totle view}"
        },
        ... JSON Array
    ]
}
```
#### Status Code

```json
200 OK
404 House Not Found
500 Server Error
```


### 最新房源

获取最新房源

**count代表请求的数量，如count 是 5， 会返回最新的5条数据。 如果count等于0， 会返回所有数据的列表。

```endpoint
GET /api/v1/listing/fetch/new/{count}
```

#### Example Response
```json
[
     {
        "_id": "{OBJID}",
        "type": "{type}",
        "agentID": "{agent Id}",
        "detail": {
            "title": "{title}",
            "description": "{description}",
            "type": "{type}",
            "price": "{price}",
            "totalArea": "{total area}",
            "beds": "{total beds}",
            "baths": "{total baths}",
            "build": "{build time}",
            "credit_check": "{true or false}",
            "income_report": "{true or false}",
            "background_check": "{true or false}",
            "house_images":[
                {
                    "fieldname": "{field name}",
                    "originalname": "{original name}",
                    "encoding": "{encoding}",
                    "mimetype": "{mimet ype}",
                    "destination": "{destination}",
                    "filename": "{file name}",
                    "path": "{path}",
                    "size": "{size}"
                }
                //JSON Array
            ]
        },
        "location": {
            "street": "{street}",
            "city": "{city}",
            "county": "{county}",
            "gpcode": "{google place code}",
            "state": "{State}",
            "zipcode": "{Zipcode}",
            "zone": "{Gov Zone}"
        },
        "status": {
            "active": "{true||false}"
        },
        "created": "{current Timestamp}",
        "lastUpdated": "{last updated Timestamp}",
        "view": "{totle view}"
    },
    ...JSON ARRAY
]
```
#### Status Code

```json
200 OK
404 House Not Found
500 Server Error
```


### 最热房源

获取最热房源

**count代表请求的数量，如count 是 5， 会返回最新的5条数据。 如果count等于0， 会返回所有数据的列表。

```endpoint
GET /api/v1/listing/fetch/hot/{count}
```

#### Example Response
```json
[
     {
        "_id": "{OBJID}",
        "type": "{type}",
        "agentID": "{agent Id}",
        "detail": {
            "title": "{title}",
            "description": "{description}",
            "type": "{type}",
            "price": "{price}",
            "totalArea": "{total area}",
            "beds": "{total beds}",
            "baths": "{total baths}",
            "build": "{build time}",
            "credit_check": "{true or false}",
            "income_report": "{true or false}",
            "background_check": "{true or false}",
            "house_images":[
                {
                    "fieldname": "{field name}",
                    "originalname": "{original name}",
                    "encoding": "{encoding}",
                    "mimetype": "{mimet ype}",
                    "destination": "{destination}",
                    "filename": "{file name}",
                    "path": "{path}",
                    "size": "{size}"
                }
                //JSON Array
            ]
        },
        "location": {
            "street": "{street}",
            "city": "{city}",
            "county": "{county}",
            "gpcode": "{google place code}",
            "state": "{State}",
            "zipcode": "{Zipcode}",
            "zone": "{Gov Zone}"
        },
        "status": {
            "active": "{true||false}"
        },
        "created": "{current Timestamp}",
        "lastUpdated": "{last updated Timestamp}",
        "view": "{totle view}"
    },
    ...JSON ARRAY
]
```
#### Status Code

```json
200 OK
404 House Not Found
500 Server Error
```



### 收藏房源

处理收藏房源操作，需要前台发送以下信息：

字段 | 描述
---|---
`userID` | (必须) 当前用户的用户16位ID
`listingID` | (必须) 当前房源的ID


```endpoint
POST /api/v1/user/action/favorite/create
```


#### Example response

```json
{
 "success": true,
  "data": { 
        "userID": "5a62de600ab3fd15bc4c946b",
        "listingID": "5a66417d4219da281815369c"
    }
}
```

#### Status Code

```json
200 OK
500 Server Error
```

### 取消收藏

处理取消收藏房源操作，需要前台发送以下信息：

字段 | 描述
---|---
`userID` | (必须) 当前用户的用户16位ID
`listingID` | (必须) 需要取消收藏的房源的ID


```endpoint
POST /api/v1/user/action/favorite/remove
```


#### Example response

```json
{
 "success": true,
  "data": { 
        "userID": "5a62de600ab3fd15bc4c946b",
        "listingID": "5a66417d4219da281815369c"
    }
}
```

#### Status Code

```json
200 OK
500 Server Error
```



### 检测是否收藏

处理检测是否已收藏当前房源，需要前台发送以下信息：

字段 | 描述
---|---
`userID` | (必须) 当前用户的用户16位ID
`listingID` | (必须) 需要取消收藏的房源的ID


```endpoint
POST /api/v1/user/action/favorite/distinct
```


#### Example response

```json
//如果已收藏该房源：
{
 "success": true,
  "isDistinct": false 
}

//如果未收藏该房源：
{
 "success": true,
  "isDistinct": true 
}
```

#### Status Code

```json
200 OK
500 Server Error
```

### 获取收藏列表

获取当前登录用户的收藏列表：

字段 | 描述
---|---
`userID` | (必须) 当前用户的用户16位ID


```endpoint
POST /api/v1/user/action/favorite/fetch
```


#### Example response

```json
[
    {
    "success": true,
    "data": { 
            "userID": "5a62de600ab3fd15bc4c946b",
            "listingID": "5a66417d4219da281815369c"
        }
    },
    {
        ...
    }
]

```


### 获取收藏列表及房源列表(APP)

获取当前登录用户的收藏列表：

字段 | 描述
---|---
`userID` | (必须) 当前用户的用户16位ID


```endpoint
POST /api/v1/user/action/favorite/listing
```


#### Example response

```json
{
"success": true,
"data": [
    {
        "房源1"
    },
    {
        "房源2"
    },
    ...
]

```

#### Status Code

```json
200 OK
500 Server Error
```



### 举报房源

处理举报房源操作，需要前台发送以下信息：

字段 | 描述
---|---
`userID` | (必须) 当前用户的用户16位ID
`listingID` | (必须) 当前房源的ID
`agentID` | (必须) 当前房源的经纪人ID


```endpoint
POST /api/v1/user/action/abuse/create
```


#### Example response

```json
{
 "success": true,
  "data": "举报成功"
}
//或
{
 "success": false,
  "data": "举报失败"
}
```

#### Status Code

```json
200 OK
500 Server Error
```

### 检测是否举报

处理检测是否已举报当前房源，需要前台发送以下信息：

字段 | 描述
---|---
`userID` | (必须) 当前用户的用户16位ID
`listingID` | (必须) 需要取消收藏的房源的ID


```endpoint
POST /api/v1/user/action/abuse/distinct
```


#### Example response

```json
//如果已举报该房源：
{
 "success": true,
  "isDistinct": false 
}

//如果未举报该房源：
{
 "success": true,
  "isDistinct": true 
}
```

#### Status Code

```json
200 OK
500 Server Error
```
