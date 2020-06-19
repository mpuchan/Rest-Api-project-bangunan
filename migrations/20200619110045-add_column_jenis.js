'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'PerhitunganLantais',
      'jenis',
      Sequelize.STRING(100)
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'PerhitunganLantais',
      'jenis'
    );
  }
};