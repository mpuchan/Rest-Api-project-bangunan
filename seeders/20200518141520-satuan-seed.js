'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Satuans', [
      {
        nama_satuan: 'm3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'm2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'bh',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'kampil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'sak',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'kg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'kaleng',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'set',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'pail',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'rol',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'liter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'batang',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'pcs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'lonjor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'm2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_satuan: 'm',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Satuans', null, {});
  }
};
