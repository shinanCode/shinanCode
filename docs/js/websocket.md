# Websocket
> `WebSocket` 对象提供了用于创建和管理 `WebSocket` 连接，以及可以通过该连接发送和接收数据的 API。  
> `WebSocket` 是基于 `TCP` 的一种新的应用层网络协议。它实现了浏览器与服务器全双工通信，即允许服务器主动发送信息给客户端。ws://或wss:// 开头


```javascript
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});

```
