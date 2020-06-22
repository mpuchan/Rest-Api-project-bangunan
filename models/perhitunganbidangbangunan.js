'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganBidangBangunan = sequelize.define('PerhitunganBidangBangunan', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    jenis_pengerjaan: DataTypes.STRING,
    panjangbid: DataTypes.FLOAT,
    tinggibid: DataTypes.FLOAT,
    panjangpin: DataTypes.FLOAT,
    tinggipin: DataTypes.FLOAT,
    panjangjen: DataTypes.FLOAT,
    tinggijen: DataTypes.FLOAT,
    luas_bidang: DataTypes.FLOAT,
    nama_batako: DataTypes.STRING,
    nama_semen: DataTypes.STRING,
    nama_pasir: DataTypes.STRING,
    jumlahkeperluanbatako: DataTypes.INTEGER,
    jumlahkeperluanpasir: DataTypes.FLOAT,
    Jumlahkeperluansemen: DataTypes.FLOAT,
    jumlahdalamsak: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    hargabatako: DataTypes.DOUBLE,
    hargapasir: DataTypes.DOUBLE,
    hargasemen: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganBidangBangunan.associate = function (models) {
    // associations can be defined here
    PerhitunganBidangBangunan.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganBidangBangunan;
};