module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
  });
  return Task;
};
