import express from 'express'
import jwt from 'express-jwt'
import profilController from '../controllers/ProfilController'

const router = express.Router()
const secret = process.env.JWT_SECRET

router.route('/profils')
	.get(jwt({ secret: secret }), profilController.list)
	.post(jwt({ secret: secret }), profilController.create)

router.route('/profil/:id')
	.get(jwt({ secret: secret }), profilController.get)
	.put(jwt({ secret: secret }), profilController.update)
	.delete(jwt({ secret: secret }), profilController.remove)

module.exports = router