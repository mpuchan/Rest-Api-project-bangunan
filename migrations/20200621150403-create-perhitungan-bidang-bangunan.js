'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganBidangBangunans', {
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
      panjangbid: {
        type: Sequelize.FLOAT
      },
      tinggibid: {
        type: Sequelize.FLOAT
      },
      panjangpin: {
        type: Sequelize.FLOAT
      },
      tinggipin: {
        type: Sequelize.FLOAT
      },
      panjangjen: {
        type: Sequelize.FLOAT
      },
      tinggijen: {
        type: Sequelize.FLOAT
      },
      luas_bidang: {
        type: Sequelize.FLOAT
      },
      nama_batako: {
        type: Sequelize.STRING
      },
      nama_semen: {
        type: Sequelize.STRING
      },
      nama_pasir: {
        type: Sequelize.STRING
      },
      jumlahkeperluanbatako: {
        type: Sequelize.INTEGER
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
      hargabatako: {
        type: Sequelize.DOUBLE
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
    return queryInterface.dropTable('PerhitunganBidangBangunans');
  }
};