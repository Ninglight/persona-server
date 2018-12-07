import express from 'express'
import jwt from 'express-jwt'
import networkController from '../controllers/NetworkController'

const router = express.Router()
const secret = process.env.JWT_SECRET

router.route('/networks')
	.get(jwt({ secret: secret }), networkController.list)
	.post(jwt({ secret: secret }), networkController.create)

router.route('/network/:id')
	.get(jwt({ secret: secret }), networkController.get)
	.put(jwt({ secret: secret }), networkController.update)
	.delete(jwt({ secret: secret }), networkController.remove)

module.exports = router