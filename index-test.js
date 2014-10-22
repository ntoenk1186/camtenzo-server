/**
 * Created by untung on 22/10/14.
 */
// Server setup
var express = require("express"),
    app = new express(),
    path = require("path"),
    bodyParser = require("body-parser");

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var env = require("./conf/config-test");

// Database setup
var mongoose = require("mongoose"),
    dbURL = "mongodb://localhost/camtenzoDbTest";
mongoose.connect(dbURL);

// Routes / Entry poiny
var main = require("./src/routes/index"),
    photo = require("./src/routes/photo"),
    user = require("./src/routes/user");
app.use('/', main);
app.use('/photo', photo);
app.use('/user', user);


module.exports = app;