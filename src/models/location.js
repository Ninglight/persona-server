'use strict'

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    adress: DataTypes.STRING,
    complement: DataTypes.STRING,
    city: DataTypes.STRING,
    codezip: DataTypes.STRING,
    country: DataTypes.STRING
  }, {})
  Location.associate = function (models) {
    // associations can be defined here
  }
  return Location
}
