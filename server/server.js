const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

require("./config/mongo.config");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/", require("./routes/main.route"));
app.use("/account", require("./routes/account.route"));

app.listen(process.env.PORT, () => {
	console.log(`Server running on ${process.env.PORT}...`);
});
