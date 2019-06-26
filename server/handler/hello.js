"use strict";

module.exports = (call, callback) => {
    const parameters = call.request;
    // debug messages
    console.log(`[${new Date().toISOString()}] Hello ${parameters.greeting} ${parameters.name}`);
    console.table(parameters);
    console.log('_______________________________________________________');
    
    // actual business logic ("the magic")
    callback(null, {
        message: `Hello ${parameters.greeting} ${parameters.name}`
    });
}
