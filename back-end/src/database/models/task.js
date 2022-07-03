module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    creationDate: DataTypes.DATE
  }, {
    timestamps: false,
  });
  return Task;
};
