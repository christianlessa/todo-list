const serviceTask = require('../service/task');

const getAll = async (req, res) => {
  try {
    const tasks = await serviceTask.getAll();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

const create = async (req, res) => {
  try {
    const { name, status } = req.body;

    const created = await serviceTask.create(name, status);

    return res.status(201).json(created);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;

    const taskById = await serviceTask.update(id, name, status);
    
    return res.status(200).json(taskById);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await serviceTask.deleteTask(id);

    return res.status(200).json({ message: `Task id: ${id}, deleted` });
  } catch (error) {
    return res.status(400).json({ mesage: error.message });
  }
}


module.exports = {
  getAll,
  create,
  update,
  deleteTask,
}