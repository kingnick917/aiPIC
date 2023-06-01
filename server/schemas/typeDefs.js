const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedImages: [Image]
  }
  
  type Image {
    imageId: ID!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input ImageInput {
    imageId: ID!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveImage(imageData: ImageInput!): User
    removeImage(imageId: ID!): User
  }
`;

module.exports = typeDefs;