const { getToken } = require("../util");
const db = require("../db");
const { findAll, findById, create, update, remove } = require("../services");

const { AuthenticationError } = require("apollo-server");

const activityResolvers = {
  Query: {
    findAll: async (_parent, _args, context, _info) => {
      if (context.loggedIn) {
        return await findAll();
      } else {
        throw new AuthenticationError("Please Call GenerateToken!");
      }
    },
    getActivity: async (_parent, args, context, _info) => {
      if (context.loggedIn) {
        console.log(args._id);
        return await findById(args._id);
      } else {
        throw new AuthenticationError("Please Call Generate Token!");
      }
    },
    generateToken: async (_parent, _args, _context, _info) => {
      const token = getToken();
      return { token };
    },
  },
  Mutation: {
    createActivity: async (_parent, args, context, _info) => {
      console.log(args);

      if (context.loggedIn) {
        return await create(args.input);
      } else {
        throw new AuthenticationError("Please Call Generate Token!");
      }
    },
    updateActivity: async (_parent, args, context, _info) => {
      if (context.loggedIn) {
        return await update(args._id, args.input);
      } else {
        throw new AuthenticationError("Please Call Generate Token!");
      }
    },
    deleteActivity: async (_parent, args, context, _info) => {
      //console.log(args);
      if (context.loggedIn) {
        return await remove(args._id);
      } else {
        throw new AuthenticationError("Please Call Generate Token!");
      }
    },
  },
};

module.exports = {
  activityResolvers,
};
