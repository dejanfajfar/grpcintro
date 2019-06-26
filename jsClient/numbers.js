"use strict";

const client = require('./client');

let call = client.IntroService().Numbers({
    repetitions: 10
});

call.on('data', data => {
    console.log(data.tossValue);
});

call.on('error', err => {
    console.error(err);
})