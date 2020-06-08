'use strict';
module.exports = (sequelize, DataTypes) => {
  const Triplek = sequelize.define('Triplek', {
    nama: DataTypes.STRING,
    panjang: DataTypes.INTEGER,
    lebar: DataTypes.INTEGER,
    tebal: DataTypes.INTEGER,
    SatuanId: DataTypes.INTEGER,
    harga: DataTypes.DOUBLE
  }, {});
  Triplek.associate = function (models) {
    // associations can be defined here
    Triplek.belongsTo(sequelize.models.Satuan, {
      foreignKey: "SatuanId"
    });
  };
  return Triplek;
};