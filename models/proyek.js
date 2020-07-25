'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proyek = sequelize.define('Proyek', {
    PengembangId: DataTypes.INTEGER,
    nama_proyek: DataTypes.STRING,
    luas_tanah: DataTypes.FLOAT,
    luas_bangunan: DataTypes.FLOAT,
    lokasi: DataTypes.STRING,
    tanggal: DataTypes.STRING
  }, {});
  Proyek.associate = function (models) {
    Proyek.belongsTo(sequelize.models.Pengembang, {
      foreignKey: "PengembangId"
    });
  };
  return Proyek;
};