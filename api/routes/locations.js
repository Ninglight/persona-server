import express from 'express'
import jwt from 'express-jwt'
import locationController from '../controllers/LocationController'

const router = express.Router()
const secret = process.env.JWT_SECRET

router.route('/locations')
	.get(jwt({ secret: secret }), locationController.list)
	.post(jwt({ secret: secret }), locationController.create)

router.route('/location/:id')
	.get(jwt({ secret: secret }), locationController.get)
	.put(jwt({ secret: secret }), locationController.update)
	.delete(jwt({ secret: secret }), locationController.remove)

module.exports = router