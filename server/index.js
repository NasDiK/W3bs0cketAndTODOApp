const WS = require('ws');
const port = 5000;
const wss = new WS.WebSocketServer({
    port:port
}, ()=>{
    console.log('WebSocket server started on port '+ port);
});

wss.on('connection', (websocket)=>{
    console.log('Ко мне подключился пользователь');
    websocket.on('message', (data)=>{
        const fromClient = JSON.parse(data);
        wss.clients.forEach(client=>client.readyState === WS.WebSocket.OPEN ? client.send(JSON.stringify(fromClient)):null)
    });
});
