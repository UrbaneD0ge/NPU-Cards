const express = require('express');
const mongoose = require('mongoose');
const app = express();
const NPUrouter = require('./routes/npu');
const mongoConnect = require('./config/keys.env');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.listen(3000 || process.env.PORT, () => {
    console.log('Listening at http://localhost:' + process.env.PORT);
});

// Connecting to the database
mongoose.connect(mongoConnect, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', async (req, res) => {
    res.render('index');
});

app.use('/npu', NPUrouter);
