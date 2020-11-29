const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../schemas/queries");
const resolvers = require("../resolvers/rootResolvers");

const apolloServer = (middlewares) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // console.log("apolo req headers", req.headers);
      // // Get the user token from the headers.
      // const token = req.headers.authorization || '';
   
      // // try to retrieve a user with the token
      // const user = getUser(token);
   
      // // add the user to the context
      // return { user };
    }
  });
  server.applyMiddleware(middlewares);
};

module.exports = apolloServer;
