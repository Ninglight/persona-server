'use strict';

const uuidv4 = require("uuid/v4");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [{
      uuid: '12345',
      name: 'Valentin Bourreau',
      adress: '1 impasse de la calypso',
      complement: null,
      city: 'Nantes',
      codezip: '44000',
      country: 'France',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
