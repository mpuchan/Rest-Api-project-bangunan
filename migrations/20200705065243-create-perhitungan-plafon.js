'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PerhitunganPlafons', {
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
      panjang: {
        type: Sequelize.FLOAT
      },
      lebar: {
        type: Sequelize.FLOAT
      },
      luas: {
        type: Sequelize.FLOAT
      },
      namatriplek: {
        type: Sequelize.STRING(100)
      },
      namapaku: {
        type: Sequelize.STRING
      },
      jumlahpaku: {
        type: Sequelize.FLOAT
      },
      jumlahtriplek: {
        type: Sequelize.FLOAT
      },
      jumlahreng: {
        type: Sequelize.FLOAT
      },
      namareng: {
        type: Sequelize.STRING(100)
      },
      hargatriplek: {
        type: Sequelize.DOUBLE
      },
      hargapaku: {
        type: Sequelize.DOUBLE
      },
      hargareng: {
        type: Sequelize.DOUBLE
      },
      hargatotaltriplek: {
        type: Sequelize.DOUBLE
      },
      hargatotalpaku: {
        type: Sequelize.DOUBLE
      },
      hargatotalreng: {
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
    return queryInterface.dropTable('PerhitunganPlafons');
  }
};