import { gql } from "@apollo/client";

const GET_WEIGHTS_IMAGES = gql`
  query GetDogs {
    fetchImages {
      url
      category
      member {
        name
        _id
        age
        dietRelatedIllness
      }
      createdAt
    }
  }
`;

export { GET_WEIGHTS_IMAGES };
