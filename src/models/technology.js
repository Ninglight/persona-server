'use strict';
module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define('Technology', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    urlLogo: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Technology.associate = function(models) {
    models.Technology.hasMany(models.Skill);
  };
  return Technology;
};