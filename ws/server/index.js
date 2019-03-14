var server = require('ws').Server;
var s = new server({ port: 5001 });


s.on('connection', function(ws) {
    ws.on('message', function(clientmsg) {
        console.log("Received:" +clientmsg);

        if(clientmsg == "hello") {
            ws.send("hello from server");
        }
    });
});