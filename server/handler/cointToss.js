"use strict";

module.exports = async call => {
    for(let i = 0; i < call.request.repetitions; i++) {
        await sleep(1000);
        let number = Math.floor(Math.random() * 100);
        console.log(number);
        call.write({
            tossValue: number
        });
    }
    call.end();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};