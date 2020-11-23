const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../schemas/datasets/user.schema");

const jwtRequired = passport.authenticate("jwt", { session: false });

router.post("/signup", passport.authenticate("signup", { 
  session: false 
}, (req, res) => {
  console.log("new signup", req.body);
  res.sendStatus(300);
}));



// async(err, user, info) => {

//   try {
//     let user = new User(req.body);
//     let savedUser = await user.save();
//     getSignedToken({user: {id: savedUser._id}}, (token) => {
//       res.status(200).json({ token });
//     });

//   } catch(err) {
//     // console.error(err);
//     res.sendStatus(400);
//   }

// }



// router.post("/signup", async(req, res, next) => {
//   passport.authenticate("signup", { 
//       session: false 
//     }, async(err, user, info) => {

//       try {
//         let user = new User(req.body);
//         let savedUser = await user.save();
//         getSignedToken({user: {id: savedUser._id}}, (token) => {
//           res.status(200).json({ token });
//         });
  
//       } catch(err) {
//         // console.error(err);
//         res.sendStatus(400);
//       }

//   })(req, res, next);
// });


router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
