var express = require('express');
var bodyParser = require('body-parser');

var event = require('./routes/eventroutes');
var user = require('./routes/userroutes');
var app = express();

var mongoose = require('mongoose');
var dev_db_url = 'mongodb://dbtest2:dbtest2@ds263520.mlab.com:63520/matchup-test';
// var dev_db_url = 'mongodb://localhost:27017/events';
// var url = 'mongodb://192.168.43.29:27017/events';
var mongoDB = dev_db_url || process.env.MONGOLAB_URI;

mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('connected', console.log.bind(console,'Connected to MongoDB...'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/events', event);
app.use('/user',user);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
