'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganLantai = sequelize.define('PerhitunganLantai', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    jenis_pengerjaan: DataTypes.STRING,
    panjanglan: DataTypes.FLOAT,
    lebarlan: DataTypes.FLOAT,
    luas_lantai: DataTypes.FLOAT,
    toleransi: DataTypes.FLOAT,
    nama_keramik: DataTypes.STRING,
    nama_semen: DataTypes.STRING,
    nama_pasir: DataTypes.STRING,
    nama_semennat: DataTypes.STRING,
    jumlahkeperluankeramik: DataTypes.INTEGER,
    jumlahkeperluanpasir: DataTypes.FLOAT,
    Jumlahkeperluansemen: DataTypes.FLOAT,
    jumlahkeperluannat: DataTypes.FLOAT,
    jumlahdalamsak: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    hargakeramik: DataTypes.DOUBLE,
    hargakeramiktotal: DataTypes.DOUBLE,
    hargapasir: DataTypes.DOUBLE,
    hargapasirtotal: DataTypes.DOUBLE,
    hargasemen: DataTypes.DOUBLE,
    hargasementotal: DataTypes.DOUBLE,
    harganat: DataTypes.DOUBLE,
    harganattotal: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganLantai.associate = function (models) {
    // associations can be defined here
    PerhitunganLantai.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganLantai;
};