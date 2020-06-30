'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganAcian = sequelize.define('PerhitunganAcian', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    jenis_pengerjaan: DataTypes.STRING,
    panjangdin: DataTypes.FLOAT,
    tinggidin: DataTypes.FLOAT,
    sisi: DataTypes.FLOAT,
    luas: DataTypes.FLOAT,
    nama_semen: DataTypes.STRING,
    Jumlahkeperluansemen: DataTypes.FLOAT,
    jumlahdalamsak: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    hargasemen: DataTypes.DOUBLE,
    hargasementotal: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganAcian.associate = function (models) {
    // associations can be defined here
    PerhitunganAcian.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganAcian;
};