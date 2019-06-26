"use string";

const client = require('./client');

const readLine = require('readline');

const readLIneInstance = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userName = "";

const server = client.ChatService();

function startChat() {
    const channel = server.join({
        user: userName
    });

    channel.on('data', message => {
        if(message.user === userName){
            return;
        }
        console.log(`${message.user}: ${message.text}`);
    });

    readLIneInstance.on('line', text => {
        server.send({
            user: userName,
            text: text
        }, res => {});
    });
}

readLIneInstance.question('Who are you? ', answer => {
    userName = answer;

    startChat();
})