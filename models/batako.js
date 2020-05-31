'use strict';
module.exports = (sequelize, DataTypes) => {
  const Batako = sequelize.define('Batako', {
    nama: DataTypes.STRING,
    SatuanId: DataTypes.INTEGER,
    panjang: DataTypes.INTEGER,
    lebar: DataTypes.INTEGER,
    tinggi: DataTypes.INTEGER,
    harga: DataTypes.DOUBLE
  }, {});
  Batako.associate = function (models) {
    // associations can be defined here
    Batako.belongsTo(sequelize.models.Satuan, {
      foreignKey: "SatuanId"
    });
  };
  return Batako;
};