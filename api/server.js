import app from './init'
import { promisify } from 'util'
import 'dotenv/config'
import moment from 'moment'

// Init moment format
moment.locale('fr')

// Start server
const startServer = async () => {
	const port = process.env.SERVER_PORT || 3000 // eslint-disable-line
	await promisify(app.listen).bind(app)(port)
	console.log(`Listening on port ${port}`) // eslint-disable-line
}

startServer()

