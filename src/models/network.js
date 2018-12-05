'use strict';

module.exports = (sequelize, DataTypes) => {
  const Network = sequelize.define('Network', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    profilId: DataTypes.UUID,
    type: DataTypes.STRING,
    linkUrl: DataTypes.STRING
  }, {});
  Network.associate = function(models) {
    models.Network.belongsTo(models.Profil, {
      onDelete: "CASCADE",
      foreignKey: 'profilId'
    });
  };
  return Network;
};