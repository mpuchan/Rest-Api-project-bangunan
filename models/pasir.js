'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pasir = sequelize.define('Pasir', {
    nama: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
    SatuanId: DataTypes.INTEGER,
    harga: DataTypes.DOUBLE
  }, {});
  Pasir.associate = function (models) {
    // associations can be defined here
    Pasir.belongsTo(sequelize.models.Satuan, {
      foreignKey: "SatuanId"
    });
  };
  return Pasir;
};