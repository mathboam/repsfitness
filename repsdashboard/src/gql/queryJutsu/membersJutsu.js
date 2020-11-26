import { gql } from "@apollo/client";

const GET_MEMBERS = gql`
  query {
    fetchMembers {
      _id
      name
      dietRelatedIllness
      package
      age
      email
      profile
      startWeight
      contact
    }
  }
`;

export { GET_MEMBERS };
