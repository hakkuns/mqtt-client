const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost');
const topic = 'sensors/temperature';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max) / 10;
};

client.on('connect', function() {
    client.subscribe(topic);
    setInterval(function() {
        let temperature = 20 + getRandomInt(100);
        client.publish(topic, temperature.toString());
        console.log('Temperature', temperature.toString());
    }, 1000);
});