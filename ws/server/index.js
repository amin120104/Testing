var server = require('ws').Server;
var s = new server({ port: 5001 });
var name;


s.on('connection', function(ws) {
    ws.on('message', function(message) {

        console.log(message);

        message = JSON.parse(message);

        if(message.type == "name") {
            ws.personName = message.data;
            return;
        }

        console.log("Received:" +message);


        //all connected client and message
        s.clients.forEach(function e(client) {

            //not send same massage to client
            if(client != ws) {

                client.send(JSON.stringify({
                    name: ws.personName,
                    data: message.data
                }));

            }
            console.log(client);
        });

        // ws.send(`From server: ${message}`);
    });

    ws.on('close', function(){
        console.log('one person go to offline');
    });
    console.log(`new persion connected`);
});