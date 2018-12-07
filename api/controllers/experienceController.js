import { sequelize } from './../models'

const Experience = sequelize.models.Experience

function list(req, res) {
	const { offset = 0, limit = 50 } = req.query

	Experience.findAll({
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
	Experience.findById(req.params.id)
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
	Experience.create({
		title: req.body.title,
		description: req.body.description,
		type: req.body.type,
		startedAt: req.body.startedAt,
		finishedAt: req.body.finishedAt,
		profilId: req.body.profilId,
		locationId: req.body.locationId,
		logoUrl: req.body.logoUrl,
		linkUrl: req.body.linkUrl,
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
	Experience.update({
		type: req.body.type,
		startedAt: req.body.startedAt,
		finishedAt: req.body.finishedAt,
		title: req.body.title,
		profilId: req.body.profilId,
		locationId: req.body.locationId,
		description: req.body.description,
		logoUrl: req.body.logoUrl,
		linkUrl: req.body.linkUrl,
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
	await Experience.destroy({
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

export default {
	get,
	create,
	update,
	list,
	remove,
}