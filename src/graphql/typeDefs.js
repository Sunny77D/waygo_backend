const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    merchant(id: ID!): Merchant!
  }
  type Merchant {
    id: ID!
  }
  type Transaction {
    id: ID!
  }
`
