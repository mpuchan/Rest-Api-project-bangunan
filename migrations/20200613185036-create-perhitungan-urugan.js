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
      PasirId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Pasirs",
          key: "id"
        }
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
      luas: {
        type: Sequelize.FLOAT
      },
      luasjadi: {
        type: Sequelize.FLOAT
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