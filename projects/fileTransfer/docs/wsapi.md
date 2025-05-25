# WebSocket API文档

#### 0. API格式

```
{
    "mode": mode, //模式
    "data": data, //数据
}
```

#### 1. 发送方登录
- 发送
    - mode: login
    - data 
    ```
    {
        "mode": "send"
        "file": filename //文件名
    }
    ```
- 接收
    - mode: login
    - data
    ```
    {
        "login": "ok"
        "roomid": roomid //房间号
    }
    ```

#### 2. 接收方登录
- 发送
    - mode: login
    - data 
    ```
    {
        "mode": "recv"
        "roomid": filename //房间号
    }
    ```
- 接收
    - mode: login
    - data
    ```
    {
        "login": "ok" or "room not found"
    }
    ```