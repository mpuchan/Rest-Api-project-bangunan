'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganPondasis', {
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
      a: {
        type: Sequelize.FLOAT
      },
      b: {
        type: Sequelize.FLOAT
      },
      t: {
        type: Sequelize.FLOAT
      },
      p: {
        type: Sequelize.FLOAT
      },
      luas: {
        type: Sequelize.FLOAT
      },
      metode: {
        type: Sequelize.STRING(100)
      },
      namasemen: {
        type: Sequelize.STRING(100)
      },
      namapasir: {
        type: Sequelize.STRING(100)
      },
      namabatu: {
        type: Sequelize.STRING
      },
      hargasemen: {
        type: Sequelize.DOUBLE
      },
      hargapasir: {
        type: Sequelize.DOUBLE
      },
      hargabatukali: {
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
      jumlahbatu: {
        type: Sequelize.FLOAT
      },
      jumlahbatutruk: {
        type: Sequelize.FLOAT
      },
      hargasementotal: {
        type: Sequelize.DOUBLE
      },
      hargapasirtotal: {
        type: Sequelize.DOUBLE
      },
      hargabatutotal: {
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
    return queryInterface.dropTable('PerhitunganPondasis');
  }
};