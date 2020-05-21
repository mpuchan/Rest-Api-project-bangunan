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
        nama_jenis: 'batu kali/batu alam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'semen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'bambu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_jenis: 'kayu',
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
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jenis', null, {});
  }
};
