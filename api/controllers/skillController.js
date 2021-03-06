import { sequelize } from './../models'

const Skill = sequelize.models.Skill

function list(req, res) {
	const { offset = 0, limit = 50 } = req.query

	Skill.findAll({
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
	Skill.findById(req.params.id)
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
	Skill.create({
		profilId: req.body.profilId,
		technologyId: req.body.technologyId,
		name: req.body.name,
		content: req.body.content,
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
	Skill.update({
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
	await Skill.destroy({
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