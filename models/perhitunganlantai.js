'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganLantai = sequelize.define('PerhitunganLantai', {
    ProyekId: DataTypes.INTEGER,
    KeramikId: DataTypes.INTEGER,
    SemenId: DataTypes.INTEGER,
    PasirId: DataTypes.INTEGER,
    SemeNatId: DataTypes.INTEGER,
    panjanglan: DataTypes.FLOAT,
    tinggilan: DataTypes.FLOAT,
    luas_lantai: DataTypes.FLOAT,
    toleransi: DataTypes.FLOAT,
    jumlahkeperluankeramik: DataTypes.INTEGER,
    jumlahkeperluanpasir: DataTypes.FLOAT,
    Jumlahkeperluansemen: DataTypes.FLOAT,
    jumlahdalamsak: DataTypes.FLOAT,
    jumlahkeperluannat: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    hargakeramik: DataTypes.DOUBLE,
    hargapasir: DataTypes.DOUBLE,
    hargasemen: DataTypes.DOUBLE,
    harganat: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE,
    jenis: DataTypes.STRING
  }, {});
  PerhitunganLantai.associate = function (models) {
    // associations can be defined here
    PerhitunganLantai.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });

    PerhitunganLantai.belongsTo(sequelize.models.Keramik, {
      foreignKey: "KeramikId"
    });

    PerhitunganLantai.belongsTo(sequelize.models.Semen, {
      foreignKey: "SemenId"
    });

    PerhitunganLantai.belongsTo(sequelize.models.Pasir, {
      foreignKey: "PasirId"
    });
    PerhitunganLantai.belongsTo(sequelize.models.Semennat, {
      foreignKey: "SemeNatId"
    });
  };
  return PerhitunganLantai;
};