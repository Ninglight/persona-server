'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type: DataTypes.STRING,
    startedAt: DataTypes.DATE,
    finishedAt: DataTypes.DATE,
    title: DataTypes.STRING,
    idUser: DataTypes.STRING,
    idLocation: DataTypes.STRING,
    description: DataTypes.TEXT,
    urlLogo: DataTypes.STRING,
    urlLink: DataTypes.STRING
  }, {});
  Experience.associate = function(models) {
    models.Experience.belongsTo(models.Location, {
      onDelete: "CASCADE",
      foreignKey: 'idLocation'
    });
  };
  return Experience;
};