'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganPlesteran = sequelize.define('PerhitunganPlesteran', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    jenis_pengerjaan: DataTypes.STRING,
    panjangdin: DataTypes.FLOAT,
    tinggidin: DataTypes.FLOAT,
    tebal: DataTypes.FLOAT,
    sisi: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    nama_semen: DataTypes.STRING,
    nama_pasir: DataTypes.STRING,
    jumlahkeperluanpasir: DataTypes.FLOAT,
    Jumlahkeperluansemen: DataTypes.FLOAT,
    jumlahdalamsak: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    hargapasir: DataTypes.DOUBLE,
    hargasemen: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganPlesteran.associate = function (models) {
    // associations can be defined here
    PerhitunganPlesteran.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganPlesteran;
};