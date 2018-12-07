import express from 'express'
import jwt from 'express-jwt'
import fileController from '../controllers/FileController'

const router = express.Router()
const secret = process.env.JWT_SECRET

router.route('/files')
	.get(jwt({ secret: secret }), fileController.list)
	.post(jwt({ secret: secret }), fileController.create)

router.route('/file/:id')
	.get(jwt({ secret: secret }), fileController.get)
	.put(jwt({ secret: secret }), fileController.update)
	.delete(jwt({ secret: secret }), fileController.remove)

module.exports = router