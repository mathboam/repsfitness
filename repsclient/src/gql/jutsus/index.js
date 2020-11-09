import { gql, useMutation, useQuery } from "@apollo/client";

const CreatePayment = gql`
  mutation {
    addPayment(
      input: {
        amount: 234
        transactionId: "8738y12bbuy1g7823"
        from: "0542345672"
      }
    ) {
      payment {
        _id
        amount
      }
    }
  }
`;
