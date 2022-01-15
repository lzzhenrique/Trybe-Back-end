'use strict';

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.addColumn('Users', 'phone_num', {
      type: Sequelize.STRING,
    });
  },

  down: async (QueryInterface, Sequelize) => {
    await QueryInterface.removeColumn('Users', 'phone_num');
  }
};