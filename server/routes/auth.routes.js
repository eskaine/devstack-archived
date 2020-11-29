// const router = require("express").Router();
// const passport = require("passport");
// const jwt = require("jsonwebtoken");
// const User = require("../schemas/datasets/user.schema");

// const jwtRequired = passport.authenticate("jwt", { session: false });

// router.post("/signup", async (req, res, next) => {
//   passport.authenticate(
//     "signup",
//     { session: false },
//     async (err, user, info) => {
//       if (err) res.sendStatus(403);

//       // const token = await createToken({ id: user._id });
//       res.status(200).json({ token });
//     }
//   )(req, res, next);
// });

// // async(err, user, info) => {

// //   try {
// //     let user = new User(req.body);
// //     let savedUser = await user.save();
// //     getSignedToken({user: {id: savedUser._id}}, (token) => {
// //       res.status(200).json({ token });
// //     });

// //   } catch(err) {
// //     // console.error(err);
// //     res.sendStatus(400);
// //   }

// // }



// // router.post("/signup", async(req, res, next) => {
// //   passport.authenticate("signup", { 
// //       session: false 
// //     }, async(err, user, info) => {

// //       try {
// //         let user = new User(req.body);
// //         let savedUser = await user.save();
// //         getSignedToken({user: {id: savedUser._id}}, (token) => {
// //           res.status(200).json({ token });
// //         });
  
// //       } catch(err) {
// //         // console.error(err);
// //         res.sendStatus(400);
// //       }

// //   })(req, res, next);
// // });

// router.post("/login", async (req, res, next) => {
//   passport.authenticate("login", async (err, user, info) => {
//     try {
//       if (err || !user) {
//         return next(err);
//       }

//       req.logIn(user, async (error) => {
//         if (error) return next(error);

//         // const token = await createToken({ id: user._id });
//         // res.status(200).json({ token });
//         res.sendStatus(200);
//       });
//     } catch (err) {
//       return next(err);
//     }
//   })(req, res, next);
// });

// module.exports = router;
