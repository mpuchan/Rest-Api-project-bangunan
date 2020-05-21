'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jenis = sequelize.define('Jenis', {
    nama_jenis: DataTypes.STRING
  }, {});
  Jenis.associate = function(models) {
    // associations can be defined here
  };
  return Jenis;
};