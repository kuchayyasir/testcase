const { create, update, findAll, findById, remove } = require("../services");
const { getToken } = require("../util");

const index = async (req, res) => {
  const activities = await findAll();
  res.send(activities);
};
const store = async (req, res) => {
  const newActivity = await create(req.body);
  res.send(newActivity);
};
const show = async (req, res) => {
  const activity = await findById(req.params.id);
  res.send(activity);
};
const put = async (req, res) => {
  console.log();
  const activity = await update(req, params.id, req.body);
  res.send(activity);
};
const destroy = async (req, res) => {
  const activity = await remove(req.params.id);
  res.send(activity);
};
const generateToken = async (req, res) => {
  const token = getToken();
  res.json({ token });
};

module.exports = {
  index,
  store,
  show,
  put,
  destroy,
  generateToken,
};
