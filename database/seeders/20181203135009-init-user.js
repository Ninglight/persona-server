'use strict'

const uuidv4 = require('uuid/v4')
const bcrypt = require('bcrypt') 

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      uuid: uuidv4(),
      username: 'valning',
      email: 'valentin.bourreau@gmail.com',
      password: bcrypt.hashSync('123', 10),
      refreshToken: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
