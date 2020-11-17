const bcrypt = require("bcrypt");

function hashPassword(user, password, next) {
  if (!user.isModified("password")) return next();
  user.password = bcrypt.hashSync(password, Number(process.env.SALT_ROUND));
  next();
}

module.exports = { hashPassword };
