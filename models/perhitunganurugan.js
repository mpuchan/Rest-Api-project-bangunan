'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganUrugan = sequelize.define('PerhitunganUrugan', {
    ProyekId: DataTypes.INTEGER,
    PasirId: DataTypes.INTEGER,
    panjang: DataTypes.FLOAT,
    lebar: DataTypes.FLOAT,
    tinggi: DataTypes.FLOAT,
    luas: DataTypes.FLOAT,
    luasjadi: DataTypes.FLOAT,
    Jumlahkeperluanpasir: DataTypes.FLOAT,
    jumlahdalamtruk: DataTypes.FLOAT,
    hargapasir: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganUrugan.associate = function(models) {
    // associations can be defined here
  };
  return PerhitunganUrugan;
};