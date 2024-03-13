client = new Paho.MQTT.Client("mqtt.netpie.io", 443, "9fbc637d-c04e-4780-85b5-2b6603457099");
client.onMessageArrived = onMessageArrived;

var options = {
    useSSL: true,
    userName : "A8PQUhqCKraeVgdfBf8696JxQ4aXzB7Z",
    password : "xFReieWTQncMEaBwrVupDqyZtk5HSvtG",  
    onSuccess: onConnect,
    onFailure:doFail,
}
     
client.connect(options);

function onConnect() {
    client.subscribe("@msg/open");
    client.subscribe("@msg/engine");
}

function doFail(e){
    document.getElementById("status").className = "offline";
    document.getElementById("status").innerHTML = e;
  }

function onMessageArrived(message) {
    if (message.destinationName=="@msg/open") {
        document.getElementById("ph_cout").innerHTML = message.payloadString;
    }
}

// function publishMessage() {
//     topic_name = document.getElementById("topic_name").value;
//     msg_name = document.getElementById("msg_name").value;
//     message = new Paho.MQTT.Message(msg_name);
//     message.destinationName = topic_name;
//     client.send(message);
// }

function engineOn() {
    topic_name = "@msg/engine";
    msg_name = "Start";
    message = new Paho.MQTT.Message(msg_name);
    message.destinationName = topic_name;
    client.send(message);
}