'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganLantais', {
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
      panjanglan: {
        type: Sequelize.FLOAT
      },
      lebarlan: {
        type: Sequelize.FLOAT
      },
      luas_lantai: {
        type: Sequelize.FLOAT
      },
      nama_keramik: {
        type: Sequelize.STRING
      },
      hargakeramik: {
        type: Sequelize.DOUBLE
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
      nama_semennat: {
        type: Sequelize.STRING
      },
      harganat: {
        type: Sequelize.DOUBLE
      },
      jumlahkeperluankeramik: {
        type: Sequelize.FLOAT
      },
      jumlahkeperluankeramikdus: {
        type: Sequelize.FLOAT
      },
      jumlahkeperluanpasir: {
        type: Sequelize.FLOAT
      },
      Jumlahkeperluansemen: {
        type: Sequelize.FLOAT
      },
      jumlahkeperluannat: {
        type: Sequelize.FLOAT
      },
      jumlahdalamsak: {
        type: Sequelize.FLOAT
      },
      metode: {
        type: Sequelize.STRING
      },
      hargakeramiktotal: {
        type: Sequelize.DOUBLE
      },
      hargasementotal: {
        type: Sequelize.DOUBLE
      },
      hargapasirtotal: {
        type: Sequelize.DOUBLE
      },
      harganattotal: {
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
    return queryInterface.dropTable('PerhitunganLantais');
  }
};