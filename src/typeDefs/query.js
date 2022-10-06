const { gql } = require("apollo-server");

const query = gql`
  type Query {
    findAll: [Activity]
    getActivity(_id: ID!): Activity
    generateToken: Token!
  }

  type Mutation {
    createActivity(input: ActivityInput): Activity
    updateActivity(_id: ID!, input: ActivityInput): Activity
    deleteActivity(_id: ID!): Activity
  }
`;

module.exports = {
  query,
};
