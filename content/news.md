


### Fetch A News content

通过新闻ID来获取新闻页面
回复的link前面需要加上live 网站的前缀，例如：https://www.fangsosou.com

```endpoint
GET /api/v1/news/web/{OBJID}
```

#### Example Response
```json
{
    "success": true,
    "link": "/news/{Object ID}"
}
```
#### Status Code

```json
200 OK
404 News Not Found
500 Server Error
```


### Fetch News Listing

Fetch the news list

```endpoint
GET /api/v1/news/list/{limit}
```
**If the limit is equal to 0, it returns the entire news collection (no limit)

**limit代表请求的新闻数量，如limit 是 5， 会返回最新的5条新闻。 如果limit等于0， 会返回所有新闻的列表。

#### Example Response
```json
{
    "pageCount": "{total page number of house listing page}",
    "results": ["JSON Array, See Fetch a listing"]
}
```
#### Status Code

```json
200 OK
404 News Not Found
500 Server Error
```