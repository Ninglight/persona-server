'use strict'
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    profilId: DataTypes.UUID,
    technologyId: DataTypes.UUID,
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    illustrationUrl: DataTypes.STRING
  }, {})
  Skill.associate = function (models) {
    models.Skill.belongsTo(models.Profil, {
      onDelete: 'CASCADE',
      foreignKey: 'profilId'
    })
    models.Skill.belongsTo(models.Technology, {
      onDelete: 'CASCADE',
      foreignKey: 'technologyId'
    })
  }
  return Skill
}
