import 'dotenv/config'

const express = require('express')
var bodyParser = require('body-parser')
const { promisify } = require('util')
var moment = require('moment')
var path = require('path')

var favicon = require('serve-favicon')

moment.locale('fr')

// Init app
const app = express()
// Enable json request
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './src/views')
app.set('view engine', 'pug')

// Import routing system
var routes = require('./routes')
app.use('/', routes)

// Déclaration du dossier assets comme static dans le routage
app.use(express.static('assets'))

// Favicon
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')))

const startServer = async () => {
  const port = process.env.SERVER_PORT || 3000
  await promisify(app.listen).bind(app)(port)
  console.log(`Listening on port ${port}`)
}

startServer()
