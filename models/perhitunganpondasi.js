'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganPondasi = sequelize.define('PerhitunganPondasi', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    a: DataTypes.FLOAT,
    b: DataTypes.FLOAT,
    t: DataTypes.FLOAT,
    p: DataTypes.FLOAT,
    luas: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    namasemen: DataTypes.STRING,
    namapasir: DataTypes.STRING,
    namabatu: DataTypes.STRING,
    hargasemen: DataTypes.DOUBLE,
    hargapasir: DataTypes.DOUBLE,
    hargabatukali: DataTypes.DOUBLE,
    jumlahsemen: DataTypes.FLOAT,
    jumlahsemendalamsak: DataTypes.FLOAT,
    jumlahpasir: DataTypes.FLOAT,
    jumlahbatu: DataTypes.FLOAT,
    jumlahbatutruk: DataTypes.FLOAT,
    hargasementotal: DataTypes.DOUBLE,
    hargapasirtotal: DataTypes.DOUBLE,
    hargabatutotal: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganPondasi.associate = function (models) {
    // associations can be defined here
    PerhitunganPondasi.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganPondasi;
};