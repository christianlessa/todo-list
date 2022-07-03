'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks',[
    {
      name: 'Fazer café',
      status: 'pendente',
      creationDate: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      name: 'Fazer faxina',
      status: 'pronto',
      creationDate: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};
