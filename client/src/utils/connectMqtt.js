var mqtt = require('mqtt'), url = require('url');

var client = mqtt.connect(
        "mqtt://m14.cloudmqtt.com",
        {
            port: 12791,
            username: "XXXXXXX",
            password: "XXXXXXX"
        }
);


client.on('connect', function () { // When connected
    // subscribe to a topic
    client.subscribe('messageReceived', function () {
        // when a message arrives, do something with it
        client.on('message', function (topic, message, packet) {
            console.log("Received '" + message + "' on '" + topic + "'");
        });
    });
    // publish a message to a topic
    client.publish('newMessage', 'ROTATE', function () {
        console.log("Message is published");
      });
});