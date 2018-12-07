import { sequelize } from './../models'

const Network = sequelize.models.Network

function list(req, res) {
	const { offset = 0, limit = 50 } = req.query

	Network.findAll({
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
	Network.findById(req.params.id)
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
	Network.create({
		profilId: req.body.profilId,
		type: req.body.type,
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
	Network.update({
		profilId: req.body.profilId,
		type: req.body.type,
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
	await Network.destroy({
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