'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
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
      role: {
        type: Sequelize.INTEGER(2)
      },
      status: {
        type: Sequelize.INTEGER(2)
      },
      image: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Users');
  }
};