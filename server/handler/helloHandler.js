"use strict";

module.exports = parameters => {
    // debug messages
    console.log(`Hello ${parameters.greeting} ${parameters.name} (${new Date().toLocaleTimeString()})`);
    console.table(parameters);
    console.log('_______________________________________________________');
    
    // actual business logic ("the magic")
    return {
        message: `Hello ${parameters.greeting} ${parameters.name}`
    }
}