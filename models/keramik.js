'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keramik = sequelize.define('Keramik', {
    nama: DataTypes.STRING,
    panjang: DataTypes.INTEGER,
    lebar: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    SatuanId: DataTypes.INTEGER,
    harga: DataTypes.DOUBLE
  }, {});
  Keramik.associate = function (models) {
    // associations can be defined here
    Keramik.belongsTo(sequelize.models.Satuan, {
      foreignKey: "SatuanId"
    });
  };
  return Keramik;
};