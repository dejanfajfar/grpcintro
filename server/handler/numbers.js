"use strict";

module.exports = async call => {
    console.log(`[${new Date().toISOString()}] Numbers request`);
    // console.table(call);
    
    for(let i = 0; i < call.request.repetitions; i++) {
        await sleep(1000);
        let number = Math.floor(Math.random() * 100);
        console.log(`[${new Date().toISOString()}] generated ${number}`);
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