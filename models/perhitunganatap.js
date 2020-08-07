'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganAtap = sequelize.define('PerhitunganAtap', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    luasatap: DataTypes.FLOAT,
    panjangnok: DataTypes.FLOAT,
    namagenteng: DataTypes.STRING,
    namabubungan: DataTypes.STRING,
    namasemen: DataTypes.STRING,
    namapasir: DataTypes.STRING,
    hargasemen: DataTypes.DOUBLE,
    hargapasir: DataTypes.DOUBLE,
    hargagenteng: DataTypes.DOUBLE,
    hargabubungan: DataTypes.DOUBLE,
    jumlahsemen: DataTypes.FLOAT,
    jumlahsemendalamsak: DataTypes.FLOAT,
    jumlahpasir: DataTypes.FLOAT,
    jumlahgenteng: DataTypes.FLOAT,
    jumlahbubungan: DataTypes.FLOAT,
    hargatotalsemen: DataTypes.DOUBLE,
    hargatotalpasir: DataTypes.DOUBLE,
    hargatotalgenteng: DataTypes.DOUBLE,
    hargatotalbubungan: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganAtap.associate = function (models) {
    // associations can be defined here
    PerhitunganAtap.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganAtap;
};