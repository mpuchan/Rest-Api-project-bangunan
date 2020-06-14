'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganAcians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProyekId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Proyeks",
          key: "id"
        }
      },
      SemenId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Semens",
          key: "id"
        }
      },
      panjangdin: {
        type: Sequelize.FLOAT
      },
      tinggidin: {
        type: Sequelize.FLOAT
      },
      luas: {
        type: Sequelize.FLOAT
      },
      Jumlahkeperluansemen: {
        type: Sequelize.FLOAT
      },
      jumlahdalamsak: {
        type: Sequelize.FLOAT
      },
      metode: {
        type: Sequelize.STRING(50)
      },
      hargasemen: {
        type: Sequelize.DOUBLE
      },
      hargatotal: {
        type: Sequelize.DOUBLE
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
    return queryInterface.dropTable('PerhitunganAcians');
  }
};