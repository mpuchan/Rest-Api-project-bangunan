'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Materials', [
      {
        SatuanId: 3,
        JenisId: 2,
        nama: 'Batako',
        panjang: 40,
        lebar: 10,
        tinggi: 20,
        tebal: '',
        berat: '',
        jumlah: 1,
        harga: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SatuanId: 5,
        JenisId: 3,
        nama: 'Gresik',
        panjang: '',
        lebar: '',
        tinggi: '',
        tebal: '',
        berat: 50,
        jumlah: 1,
        harga: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SatuanId: 1,
        JenisId: 12,
        nama: 'Pasir halus',
        panjang: '',
        lebar: '',
        tinggi: '',
        tebal: '',
        berat: '',
        jumlah: 1,
        harga: 300000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SatuanId: 2,
        JenisId: 1,
        nama: 'Keramik Setara Asia Tile 20 x 20 kelas 1 warna putih',
        panjang: 20,
        lebar: 20,
        tinggi: '',
        tebal: '',
        berat: '',
        jumlah: 25,
        harga: 66000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SatuanId: 6,
        JenisId: 15,
        nama: 'Grout (SemenNat 1kg)',
        panjang: '',
        lebar: '',
        tinggi: '',
        tebal: '',
        berat: 1,
        jumlah: '',
        harga: 14500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Proyeks', null, {});
  }
};
