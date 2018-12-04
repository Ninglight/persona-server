'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    idLocation: DataTypes.INTEGER,
    job: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
    },
    birth: DataTypes.DATE,
    description: DataTypes.TEXT,
    urlIllustration: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    models.User.belongsTo(models.Location, {
      onDelete: "CASCADE",
      foreignKey: 'idLocation'
    });
  };
  return User;
};