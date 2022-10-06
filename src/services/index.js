const { ActivityModel } = require("../models");
// Post an activity
const create = async (req) => {
  return ActivityModel.create(req);
};

// FETCH all activities
const findAll = async () => {
  return await ActivityModel.find();
};

// Find a activity by Id
const findById = async (id) => {
  return await ActivityModel.findById(id);
};

// Update a User
const update = async (id, req) => {
  return await ActivityModel.findOneAndUpdate(
    req.params.id,
    { ...req },
    { new: true }
  );
};

// Delete a activity by Id
const remove = async (id) => {
  return await ActivityModel.findByIdAndDelete(id);
};

module.exports = {
  create,
  update,
  remove,
  findAll,
  findById,
};
