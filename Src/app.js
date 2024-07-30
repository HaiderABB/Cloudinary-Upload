const createError = require('http-errors');
const express = require('express');
const UploadRouter = require('./routes/index');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/Image', UploadRouter);


app.listen(5000, () => { console.log('The Server is listening to the PORT 5000') })

module.exports = app;
