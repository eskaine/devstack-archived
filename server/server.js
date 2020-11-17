const dotenv = require("dotenv");
const express = require("express");
const session = require("cookie-session");
const helmet = require("helmet");
const hpp = require("hpp");
const csurf = require("csurf");
const limiter = require("express-rate-limit");
const passport = require("./config/passport.config");
const cors = require("cors");

dotenv.config();
const app = express();
require("./config/mongo.config");


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use(helmet());
app.use(hpp());
app.use(
  session({
    //secure: true,
    name: "session",
    secret: process.env.SESSION_SECRET,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  })
);
// app.use(csurf());
// app.use(limiter);

app.use("/", require("./routes/main.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/register", require("./routes/register.routes"));
app.use("/organizations", require("./routes/organizations.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}...`);
});
