"use strict";

module.exports = parameters => {
    return {
        message: `Hello ${parameters.greeting} ${parameters.name}`
    }
}