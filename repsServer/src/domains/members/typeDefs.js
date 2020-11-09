const { gql } = require("apollo-server-express");

module.exports = gql`
  enum Package {
    Vip
    Group
    LifeCoaching
  }
  type Member {
    _id: ID
    name: String
    age: Int
    dietRelatedIllness: String
    package: Package
    payment: [Payment]
    contact: String
    createdAt: Date
    updatedAt: Date
  }
  input addMemberInput {
    name: String
    age: Int
    dietRelatedIllness: String
    package: Package
    payment: [ID]
    contact: String
  }
  input fetchMemberInput {
    memberId: ID
  }
  input fetchMembersInput {
    name: String
    age: Int
    dietRelatedIllness: String
    package: Package
    payment: [ID]
    contact: String
  }

  type addMemberPayload {
    member: Member!
  }

  extend type Query {
    fetchMember(filter: fetchMemberInput = {}): Member
    fetchMembers(filter: fetchMembersInput = {}): [Member]
  }
  extend type Mutation {
    addMember(input: addMemberInput): addMemberPayload
  }
`;
