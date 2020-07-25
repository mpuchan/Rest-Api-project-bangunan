'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganPlafon = sequelize.define('PerhitunganPlafon', {
    ProyekId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    panjang: DataTypes.FLOAT,
    lebar: DataTypes.FLOAT,
    luas: DataTypes.FLOAT,
    namatriplek: DataTypes.STRING,
    namapaku: DataTypes.STRING,
    namareng: DataTypes.STRING,
    hargatriplek: DataTypes.DOUBLE,
    hargapaku: DataTypes.DOUBLE,
    hargareng: DataTypes.DOUBLE,
    jumlahtriplek: DataTypes.FLOAT,
    jumlahtripleklembar: DataTypes.FLOAT,
    jumlahreng: DataTypes.FLOAT,
    jumlahrengbatang: DataTypes.FLOAT,
    jumlahpaku: DataTypes.FLOAT,
    hargatotaltriplek: DataTypes.DOUBLE,
    hargatotalpaku: DataTypes.DOUBLE,
    hargatotalreng: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganPlafon.associate = function (models) {
    // associations can be defined here
    PerhitunganPlafon.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
  };
  return PerhitunganPlafon;
};