import express from 'express'
import jwt from 'express-jwt'
import skillController from '../controllers/SkillController'

const router = express.Router()
const secret = process.env.JWT_SECRET

router.route('/skills')
	.get(jwt({ secret: secret }), skillController.list)
	.post(jwt({ secret: secret }), skillController.create)

router.route('/skill/:id')
	.get(jwt({ secret: secret }), skillController.get)
	.put(jwt({ secret: secret }), skillController.update)
	.delete(jwt({ secret: secret }), skillController.remove)

module.exports = router