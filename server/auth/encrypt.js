const bcrypt = require("bcryptjs");

function hashPassword(password) {
	return bcrypt.hashSync(password, process.env.SALT_ROUND);
}

module.exports = {hashPassword};