### Search Listing by keyword

Search House by keyword and type

```endpoint
GET /api/v1/search/keyword?type={Type}&query={Search_Key_Word}
```

Property | Description
---|---
`type` | (required) sell / rent
`query` | (required) key word 
#### Example Response
```json
{
    "pageCount": "{total page number of house listing page}",
    "results": ["JSON Array, See Fetch A listing"]
}
```

#### Status Code

```json
200 OK
500 Server Error
```