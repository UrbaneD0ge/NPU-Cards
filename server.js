const express = require('express');
const mongoose = require('mongoose');
const app = express();
const NPUrouter = require('./routes/npu');

mongoose.set('strictQuery', true);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.listen(3000 || process.env.PORT, () => {
    console.log('Listening at http://localhost:3000');
});

// Connecting to the database
mongoose.connect(process.env.mongoConnect, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/find', async (req, res) => {
    res.render('find');
});

app.get('/', async (req, res) => {
    res.render('index');
});

app.use('/npu', NPUrouter);
