const uuidv4 = require('uuid/v4')
const models = require('./../models')

exports.getLocations = function (req, res) {
  models.Location.findAll()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(error => {
      res.status(500).json({
        error: error
      })
    })
}

exports.getLocation = function (req, res) {
  models.Location.findOne({
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

exports.createLocation = function (req, res) {
  models.Location.create({
    uuid: uuidv4(),
    name: req.body.name,
    adress: req.body.adress,
    complement: req.body.complement,
    city: req.body.city,
    codezip: req.body.codezip,
    country: req.body.country,
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

exports.updateLocation = function (req, res) {
  models.Location.update({
    name: req.body.name,
    adress: req.body.adress,
    complement: req.body.complement,
    city: req.body.city,
    codezip: req.body.codezip,
    country: req.body.country,
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

exports.deleteLocation = function (req, res) {
  models.Location.destroy({
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
