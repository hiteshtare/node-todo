var express = require('express');
var app = express();

var mongoose = require('mongoose');
var config = require('./config');
var logger = require('morgan');

var port = process.env.PORT || 5000;

var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use(logger('dev'));
app.use('/assets', express.static(`${__dirname}/public`));
//////////////////////
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public/`, 'index.html'));
});
//////////////////////
app.set('view-engine', 'ejs');

mongoose.connect(config.getDbConnStr()).then(() => {
  console.log(`Connected to ${config.getDbConnStr()}`);
}).catch((e) => {
  throw e;
});

setupController(app);
apiController(app);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});