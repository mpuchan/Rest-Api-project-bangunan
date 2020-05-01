'use strict';
const bcrypt = require("bcryptjs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync("melonlord", 10)
    return queryInterface.bulkInsert('Users', [{
      name: 'Toph Beifong',
      email: 'admin@gmail.com',
      notelp: '085777282844',
      username: 'admin',
      role: '1',
      status: '1',
      password: password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
