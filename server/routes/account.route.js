const router = require("express").Router();
const {checkEmail} = require("../auth/validate");
const User = require("../schemas/datasets/user.schema");

router.get("/", (req, res) => {
	res.send("Auth Route");
});

router.get("/register", (req, res) => {
	res.send("register");
});

router.post("/register", checkEmail, async(req, res) => {
	try {
		let newUser = new User(req.body);
		//hash password
		let savedUser = await newUser.save();
		res.status(200).send("Registration Successful");
	} catch(err) {
		console.error("Registration Unsuccessful");
		//status, flash error
	}
  

	//res.send("register");
});

module.exports = router;