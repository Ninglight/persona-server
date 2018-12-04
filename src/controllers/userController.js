const uuidv4 = require('uuid/v4')
const models = require('./../models')

exports.getUsers = function(req, res) {
    models.User.findAll()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
}

exports.getUser = function(req, res) {
    models.User.findOne({ 
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

exports.createUser = function(req, res) {
    models.User.create({
        uuid: uuidv4(),
        username: req.body.username,
        // password: bcrypt.hashSync("password", 10),
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        idLocation: req.body.idLocation,
        email: req.body.email,
        birth: req.body.birth,
        description: req.body.description,
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

exports.updateUser = function(req, res) {
    models.User.update({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        idLocation: req.body.idLocation,
        email: req.body.email,
        birth: req.body.birth,
        description: req.body.description,
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

exports.deleteUser = function(req, res) {
    models.User.destroy({
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
