const validator = require("validator");

function checkuser () {
	if(!req.user) {
		res.direct("/auth/login");
	} else {
		next();
	}
}

function checkEmail(req, res, next) {
	if(!validator.isEmail(req.body.email)) {
		// connect flash
		res.status(401).send("Invalid Email!");
	} else {

		next();
	}
}

module.exports = {checkuser, checkEmail};