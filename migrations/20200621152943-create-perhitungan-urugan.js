'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganUrugans', {
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
      panjang: {
        type: Sequelize.FLOAT
      },
      lebar: {
        type: Sequelize.FLOAT
      },
      tinggi: {
        type: Sequelize.FLOAT
      },
      volume: {
        type: Sequelize.FLOAT
      },
      volumejadi: {
        type: Sequelize.FLOAT
      },
      nama_pasir: {
        type: Sequelize.STRING
      },
      Jumlahkeperluanpasir: {
        type: Sequelize.FLOAT
      },
      jumlahdalamtruk: {
        type: Sequelize.FLOAT
      },
      hargapasir: {
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
    return queryInterface.dropTable('PerhitunganUrugans');
  }
};