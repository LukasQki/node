const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'To do App v1.0.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Bob',
            age: 20
        },
        {
            name: 'Lukas',
            age: 28
        },
        {
            name: 'Asia',
            age: 27
        }
    ]);
});

app.listen(3000);

module.exports.app = app;