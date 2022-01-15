'use strict';

module.exports = {
  up: async (QueryInterface, Sequelize) => QueryInterface.bulkInsert('Users', [
    {
      fullname: 'Leonardo',
      email: 'leoeleo@test.com',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      fullname: 'Jay Alex',
      email: 'rogue@rogue.com',

      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (QueryInterface) => QueryInterface.bulkDelete('Users', null, {}),
};