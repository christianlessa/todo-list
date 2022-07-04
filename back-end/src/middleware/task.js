const validationTask = async (req, res, next) => {
  const { name, status } = req.body;

  if (!name && !status) {
    return res.status(400).json({ message: 'name and status is required' });
  }

  if (!name) {
    return res.status(400).json({ message: 'name is required' });
  }

  if (!status) {
    return res.status(400).json({ message: 'status is required' });
  }

  next();
};

module.exports = {
  validationTask,
}