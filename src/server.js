//Require dependencies
const express = require("express");
const nunjucks = require("nunjucks");
var moment = require('moment');
var bodyParser = require('body-parser');
var cors = require('cors');
var auth = require('./auth.js'); //Authentification by Token

var favicon = require('serve-favicon');
var debug = require('debug')('express-sequelize');
var http = require('http');
var models = require('./models');

// Import
import 'dotenv/config'

moment.locale("fr");

//Init app
const app = express();
//Enable json request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Init authentification
app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');

// Configuring CORS w/ Dynamic Origin
var whitelist = ['http://localhost:3000', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//Crée un serveur en lui passant notre application express
//const http = require('http').Server(app);

//Récupération des models
// const elementModel = require('./api/models/elementModel.js');

//Configure Nunjucks
/*nunjucks.configure('views', {
    autoescape: true,
    express: app
});
*/
//Controller
// const elementController = require("./api/controllers/elementController.js");
app.set('views', './src/views')
app.set('view engine', 'pug');


// Import routing system
var routes = require('./routes');
app.use('/', routes);


//Déclaration du dossier assets comme static dans le routage
app.use(express.static('assets'))
// Favicon
app.use(favicon(__dirname + '/assets/favicon.ico'));


//Declare port used
var port = normalizePort(process.env.PORT || 3000);
app.set('port', port);
  /**
   * Create HTTP server.
   */
var server = http.createServer(app);

models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, function() {
    debug('Express server listening on port ' + server.address().port);
  });
  server.on('error', onError);
  server.on('listening', onListening);
});


/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

