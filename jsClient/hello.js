const client = require('./client');

client.IntroService().Hello({
    name: 'Thomson',
    greeting: 'Mr'
}, (err, greeting) => {
    if (err) {
        console.error(err);
    }
    console.log(greeting.message);
})