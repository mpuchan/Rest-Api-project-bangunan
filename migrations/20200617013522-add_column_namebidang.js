'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'PerhitunganBidangBangunans',
      'name',
      Sequelize.STRING(100)
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'PerhitunganBidangBangunans',
      'name'
    );
  }
};