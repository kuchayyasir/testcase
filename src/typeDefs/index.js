const { query } = require("./query");
const { tokenType, activityType, activityInput } = require("./types");

const typeDefs = [query, tokenType, activityType, activityInput];

module.exports = {
  typeDefs,
};
