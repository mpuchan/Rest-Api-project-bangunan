'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pengembang = sequelize.define('Pengembang', {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    notelp: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    picture: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Pengembang.associate = function(models) {
    // associations can be defined here
  };
  return Pengembang;
};