const router = require("express").Router();
const {checkEmail} = require("../auth/validate");
const User = require("../schemas/datasets/user.schema");
const Organization = require("../schemas/datasets/organization.schema");


router.get("/", (req, res) => {
	res.send("Auth Route");
});

// router.get("/register", (req, res) => {
// 	res.send("register");
// });

router.post("/:accountType", checkEmail, async(req, res) => {
	let {accountType} = req.params;
	
	
	console.log("acc type", accountType);
	try {
		let newAccount = accountType === "individual" ? new User(req.body) : new Organization(req.body);
		//hash password
		//await newAccount.save();
		let savedAccount = await newAccount.save();
		res.sendStatus(200);
	} catch(err) {
		console.error("ERROR: Registration Unsuccessful ->\n", err);
		//status, flash error
		res.sendStatus(403);
	}
  

	//res.send("register");
});

module.exports = router;