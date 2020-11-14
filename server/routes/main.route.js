const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("Home Route");
});

module.exports = router;