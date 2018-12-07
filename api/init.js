
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import path from 'path'
import cors from 'cors'
import errorhandler from 'errorhandler'

import favicon from 'serve-favicon'

require("@babel/register");
require("@babel/polyfill");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount all routes on / path
app.use('/', routes);

// Init templatong engine
app.set('views', './src/views')
app.set('view engine', 'pug')

// Init static directory for assets
app.use(express.static('assets'))

// Enable All CORS Requests
app.use(cors())

// Handle errors message logs
if (process.env.NODE_ENV === 'development') {
	// only use in development
	app.use(errorhandler({log: errorNotification}))
}

// Favicon
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico'))) // eslint-disable-line

function errorNotification (err, str, req) {
	var title = 'Error in ' + req.method + ' ' + req.url
  
	notifier.notify({
	  title: title,
	  message: str
	})
}

module.exports = app;