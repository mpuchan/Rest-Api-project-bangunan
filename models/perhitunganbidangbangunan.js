'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganBidangBangunan = sequelize.define('PerhitunganBidangBangunan', {
    ProyekId: DataTypes.INTEGER,
    BatakoId: DataTypes.INTEGER,
    SemenId: DataTypes.INTEGER,
    PasirId: DataTypes.INTEGER,
    luas_bidang: DataTypes.FLOAT,
    jumlahkeperluanbatako: DataTypes.INTEGER,
    jumlahkeperluanpasir: DataTypes.FLOAT,
    Jumlahkeperluansemen: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    hargabatako: DataTypes.DOUBLE,
    hargapasir: DataTypes.DOUBLE,
    hargasemen: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE
  }, {});
  PerhitunganBidangBangunan.associate = function (models) {
    // associations can be defined here
    PerhitunganBidangBangunan.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });

    PerhitunganBidangBangunan.belongsTo(sequelize.models.Batako, {
      foreignKey: "BatakoId"
    });

    PerhitunganBidangBangunan.belongsTo(sequelize.models.Semen, {
      foreignKey: "SemenId"
    });

    PerhitunganBidangBangunan.belongsTo(sequelize.models.Pasir, {
      foreignKey: "PasirId"
    });

  };
  return PerhitunganBidangBangunan;
};