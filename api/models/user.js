'use strict'

import uuidv1 from 'uuid/v1'
import bcrypt from 'bcrypt'

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		uuid: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		username: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: {
				args: true,
				msg: 'Email are really against you',
			},
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		refreshToken: {
			type: DataTypes.UUID,
			allowNull: false,
			unique: {
				args: true,
				msg: 'Odds are really against you',
			},
			defaultValue: uuidv1(),
		},
	}, {})

	User.beforeCreate((user) => {
		const hash = bcrypt.hashSync(user.password, 10)
		user.password = hash
		user.refreshToken = uuidv1()
	})

	User.prototype.comparePassword = function (somePassword) {
		return bcrypt.compareSync(somePassword, this.password)
	}

	return User
}