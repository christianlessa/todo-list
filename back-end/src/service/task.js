const { Task } = require('../database/models');

const getAll = async () => {
  const tasks = await Task.findAll();
  return tasks;
}

module.exports = {
  getAll,
}