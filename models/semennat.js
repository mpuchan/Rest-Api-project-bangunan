'use strict';
module.exports = (sequelize, DataTypes) => {
  const Semennat = sequelize.define('Semennat', {
    nama: DataTypes.STRING,
    berat: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    SatuanId: DataTypes.INTEGER,
    harga: DataTypes.DOUBLE
  }, {});
  Semennat.associate = function (models) {
    // associations can be defined here
    Semennat.belongsTo(sequelize.models.Satuan, {
      foreignKey: "SatuanId"
    });
  };
  return Semennat;
};