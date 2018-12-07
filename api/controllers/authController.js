import jwt from 'jsonwebtoken'
import uuidv1 from 'uuid/v1'
import { sequelize } from './../models'

const User = sequelize.models.User

function authenticate(req, res, next) {
	User.findOne({
		where: {
			username: req.body.username,
		},
	}).then((user) => {
		if (user && user.comparePassword(req.body.password)) {
			req.dbUser = user
			next()
		} else {
			res.status(401).json({
				error: 'Wrong username or password'
			})
		}
	}).catch((e) => {
		res.status(500).json({
			error: e.message
		})
	})
}

async function generateJWT(req, res, next) {
	if (req.dbUser) {

		const jwtPayload = {
			id: req.dbUser.id
		}
		const jwtSecret = process.env.JWT_SECRET
		const jwtData = {
			expiresIn: process.env.JWT_DURATION
		}

		req.token = jwt.sign(jwtPayload, jwtSecret, jwtData)

		// Sets a new refresh_token every time the jwt is generated
		await req.dbUser.update({
			refreshToken: uuidv1()
		}).catch((e) => {
			res.status(500).json({
				error: e.message
			})
		})
	}
	next()
}

function refreshJWT(req, res, next) {
	User.findOne({
		where: {
			username: req.body.username,
			refreshToken: req.body.refreshToken,
		},
	}).then((user) => {
		req.dbUser = user
		next()
	}).catch(() => {
		res.status(401).json({
			error: 'Invalid username or refreshToken'
		})
	})
}

function returnJWT(req, res) {
	if (req.dbUser && req.token) {
		res.status(201).json({
			token: req.token,
			refreshToken: req.dbUser.refreshToken
		})
	} else {
		res.status(401).json({
			error: 'Unauthorized'
		})
	}
}

module.exports = {
	authenticate,
	generateJWT,
	refreshJWT,
	returnJWT,
}