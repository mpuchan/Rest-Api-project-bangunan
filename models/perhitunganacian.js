'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganAcian = sequelize.define('PerhitunganAcian', {
    ProyekId: DataTypes.INTEGER,
    SemenId: DataTypes.INTEGER,
    panjangdin: DataTypes.FLOAT,
    tinggidin: DataTypes.FLOAT,
    luas: DataTypes.FLOAT,
    Jumlahkeperluansemen: DataTypes.FLOAT,
    jumlahdalamsak: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    hargasemen: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE,
    jenis: DataTypes.STRING
  }, {});
  PerhitunganAcian.associate = function (models) {
    // associations can be defined here
    PerhitunganAcian.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
    PerhitunganAcian.belongsTo(sequelize.models.Semen, {
      foreignKey: "SemenId"
    });
  };
  return PerhitunganAcian;
};