const { ForbiddenError } = require("apollo-server-express");
const { createToken } = require("../util/auth");
const User = require("../schemas/datasets/user.schema");

const userRegister = async (parent, { userInputData }, context) => {
    // console.log('reg data2', context);

    try {
        const user = await User.create(userInputData);
        const token = await createToken({ id: user._id });

        return {token};
      } catch (error) {
        throw new ForbiddenError("Username or Email is already taken!")
      }
};

module.exports = {
  Mutation: {
    userRegister,
  },
};


