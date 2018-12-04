const uuidv4 = require('uuid/v4')
const models = require('./../models')

exports.getFiles = function(req, res) {
    models.File.findAll()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
}

exports.getFile = function(req, res) {
    models.File.findOne({ 
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

exports.createFile = function(req, res) {
    models.File.create({
        uuid: uuidv4(),
        type: req.body.type,
        idUser: req.body.idUser,
        urlStorage: req.body.urlStorage,
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

exports.updateFile = function(req, res) {
    models.File.update({
        type: req.body.type,
        idUser: req.body.idUser,
        urlStorage: req.body.urlStorage,
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

exports.deleteFile = function(req, res) {
    models.File.destroy({
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
