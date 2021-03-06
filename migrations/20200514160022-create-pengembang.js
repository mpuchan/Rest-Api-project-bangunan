'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pengembangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING(120)
      },
      email: {
        type: Sequelize.STRING(120)
      },
      notelp: {
        type: Sequelize.STRING(13)
      },
      username: {
        type: Sequelize.STRING(40)
      },
      password: {
        type: Sequelize.STRING
      },
      salt: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER(2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pengembangs');
  }
};