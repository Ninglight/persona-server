'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    startedAt: DataTypes.DATE,
    finishedAt: DataTypes.DATE,
    profilId: DataTypes.UUID,
    locationId: DataTypes.UUID,
    logoUrl: DataTypes.STRING,
    linkUrl: DataTypes.STRING
  }, {});
  Experience.associate = function(models) {
    models.Experience.belongsTo(models.Location, {
      onDelete: "CASCADE",
      foreignKey: 'locationId'
    });
    models.Experience.belongsTo(models.Profil, {
      onDelete: "CASCADE",
      foreignKey: 'profilId'
    });
  };
  return Experience;
};