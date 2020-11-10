const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// mongoose.connect(process.env.MONGODB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }, (err) => {
//     console.log("MongoDB connected...");
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("initial");
  res.send("initial route");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}...`);
});
