const express = require('express');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const productosRouter = require("./routes/productosRoutes");
const categoriasRouter = require("./routes/categoriasRoutes");

dotenv.config();

mongoose.connect(
    process.env.MONGODB_URI,
    {useNewUrlParser: true}
).then(() => console.log('DB Connected!'));

mongoose.connection.on('error', (err) => {
    console.log('Something went wrong: ', err);      
});

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);
app.listen(8080);
