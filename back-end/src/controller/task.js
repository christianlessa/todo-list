const serviceTask = require('../service/task');

const getAll = async (req, res) => {
  try {
    const tasks = await serviceTask.getAll();
    return res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


module.exports = {
  getAll,
}