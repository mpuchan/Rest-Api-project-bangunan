'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Proyeks', [
      {
        PengembangId: 1,
        nama_proyek: "Proyek Rumah Type 36",
        lokasi: "Kuta Selatan Badung",
        luas_tanah: '100',
        luas_bangunan: '50',
        tanggal: "2019-12-12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PengembangId: 2,
        nama_proyek: "Proyek Rumah Type 45",
        lokasi: "Kuta Selatan Badung",
        luas_tanah: '100',
        luas_bangunan: '50',
        tanggal: "2019-12-12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PengembangId: 1,
        nama_proyek: "Proyek Rumah Type 90",
        lokasi: "Kuta Selatan Badung",
        luas_tanah: '100',
        luas_bangunan: '50',
        tanggal: "2019-12-12",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Proyeks', null, {});
  }
};