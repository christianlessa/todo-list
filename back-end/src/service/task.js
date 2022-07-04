const { Task } = require('../database/models');

const getAll = async () => {
  const tasks = await Task.findAll();
  return tasks;
}

const create = async (name, status) => {
  const created = await Task.create({
    name,
    status,
    creationDate: Date.now(),
  });

  return created;
}

module.exports = {
  getAll,
  create,
}