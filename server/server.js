require("dotenv").config();
const express = require("express");
const session = require("cookie-session");
const helmet = require("helmet");
const hpp = require("hpp");
const csurf = require("csurf");
const rateLimit = require("express-rate-limit");
// const passport = require("./config/passport.config");
// const cors = require("cors");
const apolloServer = require("./config/apollo.config");

const app = express();
require("./config/mongo.config");

app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
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

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(cors());

apolloServer({app, path: "/api"});

// app.use("/", require("./routes/main.routes"));
// app.use("/auth", require("./routes/auth.routes"));
// app.use("/register", require("./routes/register.routes"));
//passport.authenticate('jwt', { session: false })


app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}...`);
});
