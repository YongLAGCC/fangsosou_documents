### Ask

Ask a agent

```endpoint
POST /api/v1/contact/ask
```
Property | Description
---|---
`agentId` | (required) Agent's Object Id
`name` | (required) Asker's Name
`phone` | (required) Asker's Phone
`content` | (required) Asking Content

#### Example response

```json
{
    "success": true
}
```

#### Status Code

```json
200 OK
500 Server Error
```


### Commission

Commission a agent

```endpoint
POST /api/v1/contact/commission
```
Property | Description
---|---
`agentId` | (required) Agent's Object Id
`name` | (required) Asker's Name
`phone` | (required) Asker's Phone
`content` | (required) Asking Content

#### Example response

```json
{
    "success": true
}
```

#### Status Code

```json
200 OK
500 Server Error
```