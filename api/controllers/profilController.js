import { sequelize } from './../models'

const Profil = sequelize.models.Profil

function list(req, res) {
	const { offset = 0, limit = 50 } = req.query

	Profil.findAll({
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
	Profil.findById(req.params.id)
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
	Profil.create({
		userId: req.body.userId,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		locationId: req.body.locationId,
		job: req.body.job,
		birth: req.body.birth,
		description: req.body.description,
		illustrationUrl: req.body.illustrationUrl,
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
	Profil.update({
		userId: req.body.userId,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		locationId: req.body.locationId,
		job: req.body.job,
		birth: req.body.birth,
		description: req.body.description,
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
	await Profil.destroy({
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