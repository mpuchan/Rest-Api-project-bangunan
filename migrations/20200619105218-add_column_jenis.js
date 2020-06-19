'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'PerhitunganAcians',
      'jenis',
      Sequelize.STRING(100)
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'PerhitunganAcians',
      'jenis'
    );
  }
};