const userResolvers = require("./user.resolvers");
const orgResolvers = require("./org.resolvers");

const rootResolvers = {
  Query: {
    ...orgResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};

module.exports = rootResolvers;
