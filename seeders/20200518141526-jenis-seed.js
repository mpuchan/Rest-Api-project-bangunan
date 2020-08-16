'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jenis', [
      {
        nama_jenis: 'keramik',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'batu bata/Batako',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'semen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'pengikat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'kayu/hollow',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'lis kayu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'besi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'Cat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'marmer granit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'granit tile',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'plafound/triplek',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'Pasir alam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'Paku',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'batu uruugan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'Semen Nat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'Genteng',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'Kaso',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'Plamur',
        createdAt: new Date(),
        updatedAt: new Date(),
      }


    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jenis', null, {});
  }
};
