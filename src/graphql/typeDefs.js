const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    merchant(id: ID!): Merchant!
    merchants(category: String!, lon: String!, lat: String!): [Merchant]
  }
  type Mutation {
    populate: PopulateReturn!
    createPlan(input: CreatePlanInput!): CreatePlanReturn!
  }
  type Merchant {
    id: ID!
    name: String!
    address: String!
    numTransactions: Int!
    avgAMount: Float!
  }
  type PopulateReturn {
    success: Boolean
    error: String
  }
  type CreatePlanReturn {
    success: Boolean
    error: String
    plan: [Merchant]
  }
  input CreatePlanInput {
    shopping: [Merchant]
    food: [Merchant]
    attraction: [Merchant]
    misc: [Merchant]
  }

`
