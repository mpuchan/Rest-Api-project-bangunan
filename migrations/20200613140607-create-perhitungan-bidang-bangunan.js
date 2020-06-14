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
      BatakoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Batakos",
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
      PasirId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Pasirs",
          key: "id"
        }
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
        type: Sequelize.STRING(50)
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