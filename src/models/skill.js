'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    idUser: DataTypes.INTEGER,
    idTechnology: DataTypes.INTEGER,
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    urlIllustration: DataTypes.STRING
  }, {});
  Skill.associate = function(models) {
    models.Skill.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: 'idUser'
    });
    models.Skill.belongsTo(models.Technology, {
      onDelete: "CASCADE",
      foreignKey: 'idTechnology'
    });
  };
  return Skill;
};