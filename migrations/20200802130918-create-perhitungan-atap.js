'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganAtaps', {
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
      nama: {
        type: Sequelize.STRING(100)
      },
      luasatap: {
        type: Sequelize.FLOAT
      },
      panjangnok: {
        type: Sequelize.FLOAT
      },
      namagenteng: {
        type: Sequelize.STRING(100)
      },
      namabubungan: {
        type: Sequelize.STRING(100)
      },
      namasemen: {
        type: Sequelize.STRING(100)
      },
      namapasir: {
        type: Sequelize.STRING(100)
      },
      hargasemen: {
        type: Sequelize.DOUBLE
      },
      hargapasir: {
        type: Sequelize.DOUBLE
      },
      hargagenteng: {
        type: Sequelize.DOUBLE
      },
      hargabubungan: {
        type: Sequelize.DOUBLE
      },
      jumlahsemen: {
        type: Sequelize.FLOAT
      },
      jumlahsemendalamsak: {
        type: Sequelize.FLOAT
      },
      jumlahpasir: {
        type: Sequelize.FLOAT
      },
      jumlahgenteng: {
        type: Sequelize.FLOAT
      },
      jumlahbubungan: {
        type: Sequelize.FLOAT
      },
      hargatotalsemen: {
        type: Sequelize.DOUBLE
      },
      hargatotalpasir: {
        type: Sequelize.DOUBLE
      },
      hargatotalgenteng: {
        type: Sequelize.DOUBLE
      },
      hargatotalbubungan: {
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
    return queryInterface.dropTable('PerhitunganAtaps');
  }
};