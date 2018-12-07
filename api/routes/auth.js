import express from 'express'

const authController = require('../controllers/AuthController')

const router = express.Router()

router.route('/')
	.post(authController.authenticate, authController.generateJWT, authController.returnJWT)

router.route('/refresh')
	.post(authController.refreshJWT, authController.generateJWT, authController.returnJWT)

module.exports = router