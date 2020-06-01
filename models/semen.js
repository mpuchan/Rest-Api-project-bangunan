'use strict';
module.exports = (sequelize, DataTypes) => {
  const Semen = sequelize.define('Semen', {
    nama: DataTypes.STRING,
    berat: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    SatuanId: DataTypes.INTEGER,
    harga: DataTypes.DOUBLE
  }, {});
  Semen.associate = function (models) {
    // associations can be defined here
    Semen.belongsTo(sequelize.models.Satuan, {
      foreignKey: "SatuanId"
    });
  };
  return Semen;
};