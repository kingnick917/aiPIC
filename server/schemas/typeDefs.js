const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  
  type Image {
    imageId: ID!
    image: String
    link: String
    title: String!
  }




  type Mutation {
    addUser(username: String!, email: String!, password: String!): Authapp://resources/notifications.html#
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;