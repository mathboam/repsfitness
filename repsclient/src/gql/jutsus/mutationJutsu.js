import { gql } from "@apollo/client";

const CreatePayment = gql`
  mutation {
    addPayment(
      input: {
        amount: 1000
        transactionId: "8738y12bbuy1g7823"
        phone: "0503226705"
      }
    ) {
      payment {
        _id
        amount
      }
    }
  }
`;

const CREATE_MEMBER = gql`
  mutation AddMember(
    $name: String
    $age: Int
    $email: String
    $profile: String
    $dietRelatedIllness: String
    $package: Package
    $startWeight: Int
    $contact: String
  ) {
    addMember(
      input: {
        name: $name
        age: $age
        email: $email
        profile: $profile
        dietRelatedIllness: $dietRelatedIllness
        package: $package
        contact: $contact
        startWeight: $startWeight
      }
    ) {
      member {
        name
        age
        _id
      }
    }
  }
`;

export { CREATE_MEMBER };
