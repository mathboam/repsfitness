const { gql } = require("apollo-server-express");

module.exports = gql`
  type Payment {
    _id: ID
    amount: Int
    transactionId: ID
    from: String
    createdAt: Date
    updatedAt: Date
  }
  input addPaymentInput {
    amount: Int
    transactionId: ID
    from: String
  }

  input getPaymentInput {
    paymentId: ID
  }

  type PaymentPayload {
    payment: Payment
  }

  extend type Query {
    fetchPayment(filter: getPaymentInput = {}, pagination: Pagination): Payment
  }

  extend type Mutation {
    addPayment(input: addPaymentInput): PaymentPayload
  }
`;
