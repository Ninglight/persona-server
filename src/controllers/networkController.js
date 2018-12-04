const uuidv4 = require('uuid/v4')
const models = require('./../models')

exports.getNetworks = function(req, res) {
    models.Network.findAll()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
}

exports.getNetwork = function(req, res) {
    models.Network.findOne({ 
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

exports.createNetwork = function(req, res) {
    models.Network.create({
        uuid: uuidv4(),
        idUser: req.body.idUser,
        socialNetwork: req.body.socialNetwork,
        urlLink: req.body.urlLink,
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

exports.updateNetwork = function(req, res) {
    models.Network.update({
        idUser: req.body.idUser,
        socialNetwork: req.body.socialNetwork,
        urlLink: req.body.urlLink,
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

exports.deleteNetwork = function(req, res) {
    models.Network.destroy({
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
