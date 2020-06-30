'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganPlesterans', {
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
      jenis_pengerjaan: {
        type: Sequelize.STRING(100)
      },
      panjangdin: {
        type: Sequelize.FLOAT
      },
      tinggidin: {
        type: Sequelize.FLOAT
      },
      tebal: {
        type: Sequelize.FLOAT
      },
      sisi: {
        type: Sequelize.FLOAT
      },
      volume: {
        type: Sequelize.FLOAT
      },
      nama_semen: {
        type: Sequelize.STRING
      },
      hargasemen: {
        type: Sequelize.DOUBLE
      },
      nama_pasir: {
        type: Sequelize.STRING
      },
      hargapasir: {
        type: Sequelize.DOUBLE
      },
      jumlahkeperluanpasir: {
        type: Sequelize.FLOAT
      },
      hargapasirtotal: {
        type: Sequelize.DOUBLE
      },
      Jumlahkeperluansemen: {
        type: Sequelize.FLOAT
      },
      jumlahdalamsak: {
        type: Sequelize.FLOAT
      },
      hargasementotal: {
        type: Sequelize.DOUBLE
      },
      metode: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('PerhitunganPlesterans');
  }
};