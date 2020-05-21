'use strict';
module.exports = (sequelize, DataTypes) => {
  const Satuan = sequelize.define('Satuan', {
    nama_satuan: DataTypes.STRING
  }, {});
  Satuan.associate = function(models) {
    // associations can be defined here
  };
  return Satuan;
};