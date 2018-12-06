'use strict'
module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define('Technology', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    logoUrl: DataTypes.STRING,
    type: DataTypes.STRING
  }, {})
  Technology.associate = function (models) {

  }
  return Technology
}
