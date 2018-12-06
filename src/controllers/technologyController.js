
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
