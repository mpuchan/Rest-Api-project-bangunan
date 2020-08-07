'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganBetons', {
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
      panjangbeton: {
        type: Sequelize.FLOAT
      },
      pilihanbeton: {
        type: Sequelize.STRING
      },
      namapapan: {
        type: Sequelize.STRING(100)
      },
      namapaku: {
        type: Sequelize.STRING(100)
      },
      namabesi: {
        type: Sequelize.STRING(100)
      },
      namabegel: {
        type: Sequelize.STRING(100)
      },
      namakawat: {
        type: Sequelize.STRING(100)
      },
      namapasir: {
        type: Sequelize.STRING(100)
      },
      namasemen: {
        type: Sequelize.STRING(100)
      },
      namabatu: {
        type: Sequelize.STRING(100)
      },
      hargapapan: {
        type: Sequelize.DOUBLE
      },
      hargapaku: {
        type: Sequelize.DOUBLE
      },
      hargabesi: {
        type: Sequelize.DOUBLE
      },
      hargabegel: {
        type: Sequelize.DOUBLE
      },
      hargakawat: {
        type: Sequelize.DOUBLE
      },
      hargapasir: {
        type: Sequelize.DOUBLE
      },
      hargasemen: {
        type: Sequelize.DOUBLE
      },
      hargabatu: {
        type: Sequelize.DOUBLE
      },
      jumlahpapan: {
        type: Sequelize.FLOAT
      },
      jumlahpaku: {
        type: Sequelize.FLOAT
      },
      jumlahbesi: {
        type: Sequelize.FLOAT
      },
      jumlahbesibatang: {
        type: Sequelize.FLOAT
      },
      jumlahbegel: {
        type: Sequelize.FLOAT
      },
      jumlahkawat: {
        type: Sequelize.FLOAT
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
      jumlahpasirtruk: {
        type: Sequelize.FLOAT
      },
      jumlahbatu: {
        type: Sequelize.FLOAT
      },
      jumlahbatudalamtruk: {
        type: Sequelize.FLOAT
      },
      hargatotalpapan: {
        type: Sequelize.DOUBLE
      },
      hargatotalpaku: {
        type: Sequelize.DOUBLE
      },
      hargatotalbesi: {
        type: Sequelize.DOUBLE
      },
      hargatotalbegel: {
        type: Sequelize.DOUBLE
      },
      hargatotalkawat: {
        type: Sequelize.DOUBLE
      },
      hargatotalpaku: {
        type: Sequelize.DOUBLE
      },
      hargatotalsemen: {
        type: Sequelize.DOUBLE
      },
      hargatotalpasir: {
        type: Sequelize.DOUBLE
      },
      hargatotalbatu: {
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
    return queryInterface.dropTable('PerhitunganBetons');
  }
};

