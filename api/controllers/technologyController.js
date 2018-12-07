/*
const uuidv4 = require('uuid/v4')
const models = require('./../models')

exports.getTechnologies = function (req, res) {
	models.Technology.findAll()
		.then(result => {
			res.status(200).json(result)
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		})
}

exports.getTechnology = function (req, res) {
	models.Technology.findOne({
		where: {
			uuid: req.params.id
		}
	})
		.then(result => {
			if (result !== 'null') {
				res.status(200).json(result)
			} else {
				res.status(404).json({
					result: 'uuid not found'
				})
			}
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		})
}

exports.createTechnology = function (req, res) {
	models.Technology.create({
		uuid: uuidv4(),
		name: req.body.name,
		urlLogo: req.body.urlLogo,
		type: req.body.type,
		createdAt: new Date(),
		updatedAt: new Date()
	})
		.then(result => {
			res.status(200).json(result)
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		})
}

exports.updateTechnology = function (req, res) {
	models.Technology.update({
		name: req.body.name,
		urlLogo: req.body.urlLogo,
		type: req.body.type,
		updatedAt: new Date()
	},
	{
		where: {
			uuid: req.params.id
		}
	})
		.then(result => {
			res.status(200).json(result)
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		})
}

exports.deleteTechnology = function (req, res) {
	models.Technology.destroy({
		where: {
			uuid: req.params.id
		}
	})
		.then(result => {
			res.status(200).json(result)
		})
		.catch(error => {
			res.send(error)
		})
}
*/

import { sequelize } from './../models'

const Technology = sequelize.models.Technology

function list(req, res) {
	const { offset = 0, limit = 50 } = req.query

	Technology.findAll({
		offset: offset,
		limit: limit,
	})
		.then((result) => {
			res.status(200).json(result)
		})
		.catch((e) => {
			res.status(500).json({
				error: e.message
			})
		})
}

function get(req, res) {
	Technology.findById(req.params.id)
		.then(result => {
			if (result !== 'null') {
				res.status(200).json(result)
			} else {
				res.status(404).json({
					result: 'uuid not found'
				})
			}
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		})
}

function create(req, res) {
	Technology.create({
		name: req.body.name,
		logoUrl: req.body.logoUrl,
		type: req.body.type,
	})
		.then((result) => {
			res.status(201).json(result)
		}).catch((e) => {
			res.status(500).json({
				error: e.message
			})
		})
}

function update(req, res) {
	Technology.update({
		profilId: req.body.profilId,
		technologyId: req.body.technologyId,
		name: req.body.name,
		content: req.body.content,
		illustrationUrl: req.body.illustrationUrl,
	},{
		where: {
			uuid: req.params.id
		}
	})
		.then(() => {
			res.sendStatus(201)
		}).catch((e) => {
			res.status(500).json({
				error: e.message
			})
		})
}

async function remove(req, res) {
	await Technology.destroy({
		where: {
			uuid: req.params.id
		}
	})
		.then(result => {
			res.status(200).json(result)
		})
		.catch(error => {
			res.send(error)
		})
}

module.exports = {
	get,
	create,
	update,
	list,
	remove,
}