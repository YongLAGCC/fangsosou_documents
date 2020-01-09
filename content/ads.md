### 广告列表

**count代表请求的广告数量，如count 是 5， 会返回最新的5条广告。 如果count等于0， 会返回所有广告的列表。

```endpoint
GET /api/v1/panel/ads/listingByCount/{count}
```
#### Example response

```json
{
    [
        {
            _id: "5a4574ffa51740dbbfddd2b8",
            title: "12312412412",
            content: "",
            image: {
                fieldname: "image",
                originalname: "Photo on 1-31-17 at 9.14 AM #2.jpg",
                encoding: "7bit",
                mimetype: "image/jpeg",
                destination: "asset/img",
                filename: "image-1514500571478",
                path: "asset/img/image-1514500571478",
                size: 267689
            },
            type: "",
            created_at: 1514501375138,
            views: 0
        },
        {
            ...JSON OBJECT
        }
    ],
    [
        ...
    ]
}

```

#### Status Code

```json
200 OK
500 Server Error
```


### 广告页面

获取广告页面链接
回复的link前面需要加上live 网站的前缀，例如：https://www.fangsosou.com

```endpoint
GET /api/v1/panel/ads/web/:id
```

#### Example response

```json
{
    "success": true,
    "link": "/ads/{OBJECTID}"
}
```

#### Status Code

```json
200 OK
500 Server Error
```