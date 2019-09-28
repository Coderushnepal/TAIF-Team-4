var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var cors = require('cors');


var indexRouter = require('./routes/index');

var vehicleRouter=require('./routes/vehicleroute');
var vehicleStop=require('./routes/vehiclestop');
var mongoose= require('mongoose');
var app = express();

const url = 'mongodb://localhost:27017/merobato';
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    name: 'session-id',
    secret: 'mysessionkey',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));


app.use(passport.initialize());
app.use(passport.session());


app.use('*', cors({
    //now we need to define http port of web services to authenticate with api 
    //now only authorized defined front endport will get authentication with api
    //localhost:3000 is the back end server
    origin: 'http://localhost:5500',
    credentials:true

}));


app.use('/', indexRouter);

app.use('/routes',vehicleRouter);
app.use('/stops',vehicleStop);

module.exports = app;
