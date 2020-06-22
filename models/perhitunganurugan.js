'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganUrugan = sequelize.define('PerhitunganUrugan', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    jenis_pengerjaan: DataTypes.STRING,
    panjang: DataTypes.FLOAT,
    lebar: DataTypes.FLOAT,
    tinggi: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    volumejadi: DataTypes.FLOAT,
    nama_pasir: DataTypes.STRING,
    Jumlahkeperluanpasir: DataTypes.FLOAT,
    jumlahdalamtruk: DataTypes.FLOAT,
    hargapasir: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganUrugan.associate = function (models) {
    // associations can be defined here
    PerhitunganUrugan.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganUrugan;
};