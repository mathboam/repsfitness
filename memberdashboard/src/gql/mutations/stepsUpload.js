import { gql } from "@apollo/client";
const UPLOAD_STEPS = gql`
  mutation($url: String, $category: Category, $member: ID) {
    addImage(input: { url: $url, category: $category, member: $member }) {
      image {
        url
        member {
          _id
        }
        createdAt
        category
      }
    }
  }
`;

export { UPLOAD_STEPS };
