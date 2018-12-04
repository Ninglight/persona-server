const uuidv4 = require('uuid/v4')
const models = require('./../models')

exports.getSkills = function(req, res) {
    models.Skill.findAll()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
}

exports.getSkill = function(req, res) {
    models.Skill.findOne({ 
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

exports.createSkill = function(req, res) {
    models.Skill.create({
        uuid: uuidv4(),
        idUser: req.body.idUser,
        idTechnology: req.body.idTechnology,
        name: req.body.name,
        content: req.body.content,
        urlIllustration: req.body.urlIllustration,
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

exports.updateSkill = function(req, res) {
    models.Skill.update({
        idUser: req.body.idUser,
        idTechnology: req.body.idTechnology,
        name: req.body.name,
        content: req.body.content,
        urlIllustration: req.body.urlIllustration,
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

exports.deleteSkill = function(req, res) {
    models.Skill.destroy({
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
