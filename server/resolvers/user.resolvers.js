const { ForbiddenError } = require("apollo-server-express");
const { createToken } = require("../util/auth");
const User = require("../schemas/datasets/user.schema");

const register = async (parent, { userRegister }, context) => {
    console.log('reg data', userRegister);
    // console.log('reg data2', context);
    // const token = await createToken({ id: user._id });
    try {
        let user = await User.create(userRegister);
        console.log('new user', user);

        // return done(null, newAccount);
      } catch (error) {
        throw new ForbiddenError("Username or Email is already taken!")
      }

    //   ry {
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


//   const user = await dataSources.userAPI.findOrCreateUser({ email });
//   if (user) {
//     user.token = new Buffer(email).toString("base64");
//     return user;
//   }
// return null;
return userRegister;
};

module.exports = {
  Mutation: {
    register,
  },
};


