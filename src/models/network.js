'use strict';

module.exports = (sequelize, DataTypes) => {
  const Network = sequelize.define('Network', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    idUser: DataTypes.INTEGER,
    socialNetwork: DataTypes.STRING,
    urlLink: DataTypes.STRING
  }, {});
  Network.associate = function(models) {
    models.Network.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: 'idUser'
    });
  };
  return Network;
};