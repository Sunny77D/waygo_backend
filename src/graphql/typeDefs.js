const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    merchant(id: ID!): Merchant!
    merchants(category: String!, lon: String!, lat: String!, walking: Boolean!): [Merchant]
  }
  type Mutation {
    populate: PopulateReturn!
  }
  type Merchant {
    id: ID!
    name: String!
    address: String!
    numTransactions: Int!
    avgAmount: Float!
    distance: Float
  }
  type PopulateReturn {
    success: Boolean
    error: String
  }
`
