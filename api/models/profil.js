'use strict'
export default (sequelize, DataTypes) => {
	const Profil = sequelize.define('Profil', {
		uuid: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		userId: DataTypes.UUID,
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		locationId: DataTypes.UUID,
		job: DataTypes.STRING,
		birth: DataTypes.DATE,
		description: DataTypes.TEXT,
		illustrationUrl: DataTypes.STRING
	}, {})
	Profil.associate = function (models) {
		models.Profil.belongsTo(models.Location, {
			onDelete: 'CASCADE',
			foreignKey: 'locationId'
		})
		models.Profil.belongsTo(models.User, {
			onDelete: 'CASCADE',
			foreignKey: 'userId'
		})
	}
	return Profil
}
