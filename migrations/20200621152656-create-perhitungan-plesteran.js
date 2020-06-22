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
      nama_pasir: {
        type: Sequelize.STRING
      },
      jumlahkeperluanpasir: {
        type: Sequelize.FLOAT
      },
      Jumlahkeperluansemen: {
        type: Sequelize.FLOAT
      },
      jumlahdalamsak: {
        type: Sequelize.FLOAT
      },
      metode: {
        type: Sequelize.STRING
      },
      hargapasir: {
        type: Sequelize.DOUBLE
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
    return queryInterface.dropTable('PerhitunganPlesterans');
  }
};