const { gql } = require("apollo-server-express");

const quries = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
  type Organization {
      id: ID!
      username: String!
      email: String!
      password: String!
  }
  input UserRegister {
    username: String!
    email: String!
    password: String!
  }
  type Query {
    getOrgs: [Organization]
  }
  type Mutation {
    register(userRegister: UserRegister): User!
  }
`;

module.exports = quries;
