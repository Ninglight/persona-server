const uuidv4 = require('uuid/v4')
const models = require('./../models')

exports.getExperiences = function (req, res) {
  models.Experience.findAll()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(error => {
      res.status(500).json({
        error: error
      })
    })
}

exports.getExperience = function (req, res) {
  models.Experience.findOne({
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

exports.createExperience = function (req, res) {
  models.Experience.create({
    uuid: uuidv4(),
    type: req.body.type,
    startedAt: req.body.startedAt,
    finishedAt: req.body.finishedAt,
    title: req.body.title,
    idUser: req.body.idUser,
    idLocation: req.body.idLocation,
    description: req.body.description,
    urlLogo: req.body.urlLogo,
    urlLink: req.body.urlLink,
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

exports.updateExperience = function (req, res) {
  models.Experience.update({
    type: req.body.type,
    startedAt: req.body.startedAt,
    finishedAt: req.body.finishedAt,
    title: req.body.title,
    idUser: req.body.idUser,
    idLocation: req.body.idLocation,
    description: req.body.description,
    urlLogo: req.body.urlLogo,
    urlLink: req.body.urlLink,
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

exports.deleteExperience = function (req, res) {
  models.Experience.destroy({
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
