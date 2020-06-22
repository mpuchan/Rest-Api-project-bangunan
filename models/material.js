'use strict';
module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define('Material', {
    nama: DataTypes.STRING,
    panjang: DataTypes.INTEGER,
    lebar: DataTypes.INTEGER,
    tinggi: DataTypes.INTEGER,
    tebal: DataTypes.INTEGER,
    berat: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    SatuanId: DataTypes.INTEGER,
    JenisId: DataTypes.INTEGER,
    harga: DataTypes.DOUBLE
  }, {});
  Material.associate = function (models) {
    // associations can be defined here
    Material.belongsTo(sequelize.models.Satuan, {
      foreignKey: "SatuanId"
    });
    Material.belongsTo(sequelize.models.Jenis, {
      foreignKey: "JenisId"
    });
  };
  return Material;
};