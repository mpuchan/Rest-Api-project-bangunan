'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'PerhitunganPlesterans',
      'jenis',
      Sequelize.STRING(100)
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'PerhitunganPlesterans',
      'jenis'
    );
  }
};