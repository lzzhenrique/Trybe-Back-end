'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', 
  [
    {
      title: 'O morro dos ventos Uivantes',
      author: 'Emily Brontë',
      pageQuantity: 416,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Os Miseraveis',
      author: 'Victor Hugo',
      pageQuantity: 1511,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Crime e Castigo',
      author: 'Fiódor Dostoiévski',
      pageQuantity: 438,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
