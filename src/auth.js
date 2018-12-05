// var userModel = require('./models/userModel.js');
var jwt = require('jwt-simple');

module.exports = function(req, res, next) {
    // We check token by the headers, the body and the query of a request
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  
	if (!token){
		return res.status(403).send({ 
			auth: false, message: 'No token provided.' 
		})
	}
 
	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
					auth: false, 
					message: 'Fail to Authentication. Error -> ' + err 
				})
		}
		req.userId = decoded.id;
		next()
	})
}