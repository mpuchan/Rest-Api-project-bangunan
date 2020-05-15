'use strict';
const sha1 = require("sha1");
const uniqid = require("uniqid");


module.exports = {
  up: (queryInterface, Sequelize) => {
    let salt = "melonlord"
    salt = sha1(uniqid());
    let password = sha1("melonlord" + salt);
    return queryInterface.bulkInsert('Pengembangs', [
      {
        nama: 'Emii Chan',
        email: 'emii@gmail.com',
        notelp: '082377954008',
        username: 'emii',
        password: password,
        picture: '',
        status: '1',
        salt: salt,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Megumin',
        email: 'meguminchan@gmail.com',
        notelp: '082377954008',
        username: 'megumin',
        password: password,
        picture: '',
        status: '0',
        salt: salt,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'maki',
        email: 'maki098@gmail.com',
        notelp: '082377954008',
        username: 'maki',
        password: password,
        picture: '',
        status: '1',
        salt: salt,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pengembangs', null, {});
  }
};