'use strict'

const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      uuid: uuidv4(),
      username: 'valning',
      email: 'valentin.bourreau@gmail.com',
      password: '123',
      refreshToken: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
