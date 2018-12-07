'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)

import 'dotenv/config'

const db = {}

let sequelize

const env = process.env.NODE_ENV
if (env === 'PRODUCTION') {
	sequelize = new Sequelize(process.env.DATABASE_PRODUCTION_DATABASE, process.env.DATABASE_PRODUCTION_USERNAME, process.env.DATABASE_PRODUCTION_PASSWORD, {
		host: process.env.DATABASE_PRODUCTION_HOST,
		port: process.env.DATABASE_PRODUCTION_PORT,
		dialect: process.env.DATABASE_PRODUCTION_DIALECT,
		logging: false
	})
} else {
	sequelize = new Sequelize(process.env.DATABASE_DEVELOPMENT_DATABASE, process.env.DATABASE_DEVELOPMENT_USERNAME, process.env.DATABASE_DEVELOPMENT_PASSWORD, {
		host: process.env.DATABASE_DEVELOPMENT_HOST,
		port: process.env.DATABASE_DEVELOPMENT_PORT,
		dialect: process.env.DATABASE_DEVELOPMENT_DIALECT,
		logging: false
	})
}

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
	})
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file))
		db[model.name] = model
	})

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

module.exports = { sequelize, Sequelize }
