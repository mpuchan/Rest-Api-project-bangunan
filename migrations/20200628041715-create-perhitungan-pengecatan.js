'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganPengecatans', {
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
      sisi: {
        type: Sequelize.FLOAT
      },
      luas_pengecatan: {
        type: Sequelize.FLOAT
      },
      nama_cat: {
        type: Sequelize.STRING(150)
      },
      nama_plamur: {
        type: Sequelize.STRING(150)
      },
      jumlahkeperluancat: {
        type: Sequelize.FLOAT
      },
      jumlahkeperluancatkaleng: {
        type: Sequelize.FLOAT
      },
      jumlahkeperluanplamur: {
        type: Sequelize.FLOAT
      },
      jumlahkeperluanplamursak: {
        type: Sequelize.FLOAT
      },
      hargacat: {
        type: Sequelize.DOUBLE
      },
      hargacattotal: {
        type: Sequelize.DOUBLE
      },
      hargaplamur: {
        type: Sequelize.DOUBLE
      },
      hargaplamurtotal: {
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
    return queryInterface.dropTable('PerhitunganPengecatans');
  }
};