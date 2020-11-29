const validator = require("validator");
const bcrypt = require("bcrypt");

function verifyUser () {
	if(!req.user) {
		res.direct("/auth/login");
	} else {
		next();
	}
}

function verifyEmail(req, res, next) {
	if(!validator.isEmail(req.body.email)) {
		// connect flash
		res.status(401).send("Invalid Email!");
	} else {

		next();
	}
}

function verifyPassword(password, curPassword) {
	return bcrypt.compare(password, curPassword);
}

module.exports = {verifyUser, verifyEmail, verifyPassword};