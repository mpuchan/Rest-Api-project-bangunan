'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proyeks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PengembangId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: "Pengembangs",
          key: "id"
        }
      },
      nama_proyek: {
        type: Sequelize.STRING(100)
      },
      lokasi: {
        type: Sequelize.STRING(200)
      },
      luas_tanah: {
        type: Sequelize.FLOAT
      },
      luas_bangunan: {
        type: Sequelize.FLOAT
      },
      tanggal: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Proyeks');
  }
};