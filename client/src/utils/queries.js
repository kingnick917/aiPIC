import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
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
