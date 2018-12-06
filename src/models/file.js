'use strict'
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    type: DataTypes.STRING,
    profilId: DataTypes.UUID,
    storageUrl: DataTypes.STRING
  }, {})
  File.associate = function (models) {
    models.File.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: 'profilId'
    })
  }
  return File
}
