import { sequelize } from './../models'

const Location = sequelize.models.Location

function list(req, res) {
	const { offset = 0, limit = 50 } = req.query

	Location.findAll({
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
	Location.findById(req.params.id)
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
	Location.create({
		name: req.body.name,
		adress: req.body.adress,
		complement: req.body.complement,
		city: req.body.city,
		codezip: req.body.codezip,
		country: req.body.country,
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
	Location.update({
		name: req.body.name,
		adress: req.body.adress,
		complement: req.body.complement,
		city: req.body.city,
		codezip: req.body.codezip,
		country: req.body.country,
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
	await Location.destroy({
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