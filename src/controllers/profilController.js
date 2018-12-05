const uuidv4 = require('uuid/v4')
const models = require('./../models')

exports.getProfils = function(req, res) {
    models.Profil.findAll()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
}

exports.getProfil = function(req, res) {
    models.Profil.findOne({ 
        where: { 
            uuid: req.params.id 
        } 
    })
    .then(result => {
        if(result !== "null") {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                result: 'uuid not found'
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
}

exports.createProfil = function(req, res) {
    models.Profil.create({
        uuid: uuidv4(),
        userId: req.body.userId,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        locationId: req.body.locationId,
        job: req.body.job,
        birth: req.body.birth,
        description: req.body.description,
        illustrationUrl: req.body.illustrationUrl,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
}

exports.updateProfil = function(req, res) {
    models.Profil.update({
        userId: req.body.userId,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        locationId: req.body.locationId,
        job: req.body.job,
        birth: req.body.birth,
        description: req.body.description,
        illustrationUrl: req.body.illustrationUrl,
        updatedAt: new Date()
    },
    {
        where: {
            uuid: req.params.id
        }
    })
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
}

exports.deleteProfil = function(req, res) {
    models.Profil.destroy({
        where: {
          uuid: req.params.id
        }
    })
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.send(error);
    })
}
