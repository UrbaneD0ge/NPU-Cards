const express = require('express');
const app = express();

app.get('/npu', (req, res) => {
    res.send('Hello World!');
    console.log('Get request');
    }
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});