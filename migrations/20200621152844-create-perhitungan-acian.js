'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganAcians', {
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
      luas: {
        type: Sequelize.FLOAT
      },
      nama_semen: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('PerhitunganAcians');
  }
};