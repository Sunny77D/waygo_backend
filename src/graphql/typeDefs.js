const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    merchant(id: ID!): Merchant!
    merchants(category: String!, lon: String!, lat: String!, walking: Boolean!): [Merchant]
    itinerary: [Itinerary]
    itineraryById(id: ID!): Itinerary!
  }
  type Mutation {
    populate: PopulateReturn!
    createItinerary(input: CreateInput!): CreateReturn!
  }
  type Merchant {
    id: ID!
    name: String!
    address: String!
    numTransactions: Int!
    avgAmount: Float!
    distance: Float
  }
  type Itinerary {
    id: ID!
    name: String!
    merchants: [Merchant]
    date: String
    budget: Float!
  }
  type PopulateReturn {
    success: Boolean
    error: String
  }
  type CreateReturn {
    success: Boolean
    itinerary: Itinerary
    error: String
  }
  input CreateInput {
    name: String!
    merchantsId: [ID]
    budget: Float!
  }
`
