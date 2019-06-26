"use strict";

let users = [];

module.exports.join = (call, callback) => {
    users.push(call);
    console.log(`[${new Date().toISOString()}] New user => Now serving ${users.length}`);
    notifyChat({ user: 'Server', text: 'New user joined the chat' });
}

module.exports.send = (call, callback) => {
    notifyChat(call.request);
}

function notifyChat(message) {
    console.log(`[${new Date().toISOString()}] (${message.user}) : "${message.text}"`);
    users.forEach(user => {
        user.write(message);
    });
}