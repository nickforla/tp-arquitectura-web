const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

mongoose.connect(
    process.env.MONGODB_URI,
    {useNewUrlParser: true}
).then(() => console.log('DB Connected!'));

mongoose.connection.on('error', (err) => {
    console.log('Something went wrong: ', err);      
});

const app = express();

app.use(bodyParser.json());

app.listen(8080);
