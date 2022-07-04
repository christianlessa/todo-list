const { Task } = require('../database/models');

const getAll = async () => {
  const tasks = await Task.findAll();
  return tasks;
}

const getById = async (id) => {
  const taskById = await Task.findOne({ where: { id } });
  return taskById;
};

const create = async (name, status) => {
  const created = await Task.create({
    name,
    status,
    creationDate: Date.now(),
  });

  return created;
}

const update = async (id, name, status) => {
  const taskById = await getById(id);

  if (!taskById) {
    throw Error('task id does not exist');
  }

  await Task.update(
    { name, status },
    { where: { id } },
  );

  taskById.name = name;
  taskById.status = status;
  taskById.creationDate = Date.now();

  return taskById;
};

module.exports = {
  getAll,
  create,
  update,
}