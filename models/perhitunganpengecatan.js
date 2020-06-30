'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganPengecatan = sequelize.define('PerhitunganPengecatan', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    jenis_pengerjaan: DataTypes.STRING,
    panjangdin: DataTypes.FLOAT,
    tinggidin: DataTypes.FLOAT,
    sisi: DataTypes.FLOAT,
    luas_pengecatan: DataTypes.FLOAT,
    nama_cat: DataTypes.STRING,
    nama_plamur: DataTypes.STRING,
    jumlahkeperluancat: DataTypes.FLOAT,
    jumlahkeperluanplamur: DataTypes.FLOAT,
    hargacat: DataTypes.DOUBLE,
    hargacattotal: DataTypes.DOUBLE,
    hargaplamur: DataTypes.DOUBLE,
    hargaplamurtotal: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganPengecatan.associate = function (models) {
    // associations can be defined here
    PerhitunganPengecatan.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganPengecatan;
};