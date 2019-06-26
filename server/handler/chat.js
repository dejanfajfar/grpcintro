"use strict";

let users = [];

module.exports.join = (call, callback) => {
    users.push(call);
    notifyChat({ user: 'Server', text: 'New user joined the chat' });
}

module.exports.send = (call, callback) => {
    notifyChat(call.request);
}

function notifyChat(message) {
    users.forEach(user => {
        user.write(message);
    });
}