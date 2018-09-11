//Node Modules
var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var logger = require('morgan');
var path = require('path');

//Custom Modules
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

//Initialize express app
var app = express();

//Port number
var port = process.env.PORT || 5000;

//Enable logging using morgan
app.use(logger('dev'));

//Host static files
app.use(express.static(path.join(__dirname, 'public')));

//ejs Middleware
app.set('view-engine', 'ejs');

//Connect to Database
mongoose.connect(config.getDbConnStr()).then(() => {
  console.log(`Connected to ${config.getDbConnStr()}`);
}).catch((e) => {
  throw e;
});

//Initialize controllers
setupController(app);
apiController(app);

//Start express server on specified port
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});