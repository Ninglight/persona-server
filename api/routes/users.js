import express from 'express'
import jwt from 'express-jwt'
import userController from '../controllers/UserController'

const router = express.Router()
const secret = process.env.JWT_SECRET

router.route('/users')
	.get(jwt({ secret: secret }), userController.list)
	.post(userController.create)

router.route('/user/:id')
	.get(jwt({ secret: secret }), userController.get)
	.put(jwt({ secret: secret }), userController.update)
	.delete(jwt({ secret: secret }), userController.remove)

/** Load user when API with userId route parameter is hit */
router.param('id', userController.load)

module.exports = router