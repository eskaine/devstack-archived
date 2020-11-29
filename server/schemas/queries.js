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
  type Token {
      token: String!
  }
  input UserInputData {
    username: String!
    email: String!
    password: String!
  }
  type Query {
    getOrgs: [Organization]
  }
  type Mutation {
    userRegister(userInputData: UserInputData): Token!
  }
`;

module.exports = quries;
