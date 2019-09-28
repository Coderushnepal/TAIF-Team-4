var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);




var vehicleRouter=require('./routes/vehicleroute');
var vehicleStop=require('./routes/vehiclestop');
var mongoose= require('mongoose');
var app = express();

const url = 'mongodb://localhost:27017/sajiloBato';
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






app.use('/', indexRouter);


module.exports = app;
