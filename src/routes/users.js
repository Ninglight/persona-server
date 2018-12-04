const express = require("express");
const UserController = require('./../controllers/userController')
const User = require('./../models/user.js')

// Init express router 
const router = express.Router();

// define the home page route
router.route('/users').get(function(req, res) {
    return res.send("test")

    /*User.findAll()
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        res.send(error);
    })*/
});



module.exports = router;

//router.get('/users', UserController.getUsers)

//router.route('/users').get(UserController.getUsers)