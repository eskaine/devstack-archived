const router = require("express").Router();
const passport = require("passport");
const {verifyEmail} = require("../auth/validate");
// const User = require("../schemas/datasets/user.schema");
// const Organization = require("../schemas/datasets/org.schema");
const { createToken} = require("../auth/auth");

/**
 * @post 
 * @return jsonwebtoken, to be implemented
 */


router.get("/", (req, res) => {
	res.send("Auth Route");
});

// router.get("/register", (req, res) => {
// 	res.send("register");
// });

router.post("/:accountType", verifyEmail, async (req, res, next) => {
	passport.authenticate(
	  "signup",
	  { session: false },
	  async (err, user) => {
		if (err) res.sendStatus(403);
  
		const token = await createToken({ id: user._id });
		res.status(200).json({ token });
	  }
	)(req, res, next);
});

// router.post("/:accountType", verifyEmail, async(req, res) => {
	
// 	console.log("acc type", req.params.accountType, req.body);
// 	try {
// 		let newAccount = req.params.accountType === "individual" ? new User(req.body) : new Organization(req.body);
// 		let savedAccount = await newAccount.save();
// 		res.sendStatus(200);
// 	} catch(err) {
// 		console.error("ERROR: Registration Unsuccessful ->\n", err);
// 		//status, flash error
// 		res.sendStatus(403);
// 	}
  

// 	//res.send("register");
// });

module.exports = router;