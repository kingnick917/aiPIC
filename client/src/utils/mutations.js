import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_IMAGE = gql`
  mutation saveImage($imageData: ImageInput!) {
    saveImage(imageData: $imageData) {
      _id
      username
      email
      savedImages {
        imageId
        user
        image
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_IMAGE = gql`
  mutation removeImage($imageId: ID!) {
    removeImage(imageId: $imageId) {
      _id
      username
      email
      savedImages {
        imageId
        user
        image
        description
        title
        link
      }
    }
  }
`;
