'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganBeton = sequelize.define('PerhitunganBeton', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    panjangbeton: DataTypes.FLOAT,
    pilihanbeton: DataTypes.FLOAT,
    namapapan: DataTypes.STRING,
    namapaku: DataTypes.STRING,
    namabesi: DataTypes.STRING,
    namabegel: DataTypes.STRING,
    namakawat: DataTypes.STRING,
    namapasir: DataTypes.STRING,
    namasemen: DataTypes.STRING,
    namabatu: DataTypes.STRING,
    hargapapan: DataTypes.DOUBLE,
    hargapaku: DataTypes.DOUBLE,
    hargabesi: DataTypes.DOUBLE,
    hargabegel: DataTypes.DOUBLE,
    hargakawat: DataTypes.DOUBLE,
    hargapasir: DataTypes.DOUBLE,
    hargasemen: DataTypes.DOUBLE,
    hargabatu: DataTypes.DOUBLE,
    jumlahpapan: DataTypes.FLOAT,
    jumlahpaku: DataTypes.FLOAT,
    jumlahbesi: DataTypes.FLOAT,
    jumlahbesibatang: DataTypes.FLOAT,
    jumlahbegel: DataTypes.FLOAT,
    jumlahkawat: DataTypes.FLOAT,
    jumlahsemen: DataTypes.FLOAT,
    jumlahsemendalamsak: DataTypes.FLOAT,
    jumlahpasir: DataTypes.FLOAT,
    jumlahpasirtruk: DataTypes.FLOAT,
    jumlahbatu: DataTypes.FLOAT,
    jumlahbatudalamtruk: DataTypes.FLOAT,
    hargatotalpapan: DataTypes.DOUBLE,
    hargatotalpaku: DataTypes.DOUBLE,
    hargatotalbesi: DataTypes.DOUBLE,
    hargatotalbegel: DataTypes.DOUBLE,
    hargatotalkawat: DataTypes.DOUBLE,
    hargatotalpaku: DataTypes.DOUBLE,
    hargatotalsemen: DataTypes.DOUBLE,
    hargatotalpasir: DataTypes.DOUBLE,
    hargatotalbatu: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganBeton.associate = function (models) {
    // associations can be defined here
    PerhitunganBeton.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganBeton;
};