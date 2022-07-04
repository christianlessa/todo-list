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
    return res.status(200).json(created);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}


module.exports = {
  getAll,
  create,
}