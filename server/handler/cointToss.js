"use strict";

module.exports = async call => {
    console.log(`coin toss request (${new Date().toLocaleTimeString()})`);
    // console.table(call);
    
    for(let i = 0; i < call.request.repetitions; i++) {
        await sleep(1000);
        let number = Math.floor(Math.random() * 100);
        console.log(number);
        call.write({
            tossValue: number
        });
    }

    call.end();
    console.log('_______________________________________________________');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};