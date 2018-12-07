import express from 'express'
import jwt from 'express-jwt'
import experienceController from '../controllers/ExperienceController'

const router = express.Router()
const secret = process.env.JWT_SECRET

router.route('/experiences')
	.get(jwt({ secret: secret }), experienceController.list)
	.post(jwt({ secret: secret }), experienceController.create)

router.route('/experience/:id')
	.get(jwt({ secret: secret }), experienceController.get)
	.put(jwt({ secret: secret }), experienceController.update)
	.delete(jwt({ secret: secret }), experienceController.remove)

module.exports = router