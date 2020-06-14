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
      KeramikId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Keramiks",
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
      SemeNatId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Semennats",
          key: "id"
        }
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
      toleransi: {
        type: Sequelize.FLOAT
      },
      jumlahkeperluankeramik: {
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
      jumlahkeperluannat: {
        type: Sequelize.FLOAT
      },
      metode: {
        type: Sequelize.STRING(50)
      },
      hargakeramik: {
        type: Sequelize.DOUBLE
      },
      hargapasir: {
        type: Sequelize.DOUBLE
      },
      hargasemen: {
        type: Sequelize.DOUBLE
      },
      harganat: {
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