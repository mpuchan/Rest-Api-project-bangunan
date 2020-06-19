'use strict';
module.exports = (sequelize, DataTypes) => {
  const PerhitunganPlesteran = sequelize.define('PerhitunganPlesteran', {
    ProyekId: DataTypes.INTEGER,
    SemenId: DataTypes.INTEGER,
    PasirId: DataTypes.INTEGER,
    panjangdin: DataTypes.FLOAT,
    tinggidin: DataTypes.FLOAT,
    tebal: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    jumlahkeperluanpasir: DataTypes.FLOAT,
    Jumlahkeperluansemen: DataTypes.FLOAT,
    jumlahdalamsak: DataTypes.FLOAT,
    jumlahdalamtruk: DataTypes.FLOAT,
    metode: DataTypes.STRING,
    hargapasir: DataTypes.DOUBLE,
    hargasemen: DataTypes.DOUBLE,
    hargatotal: DataTypes.DOUBLE,
    jenis: DataTypes.STRING
  }, {});
  PerhitunganPlesteran.associate = function (models) {
    // associations can be defined here
    PerhitunganPlesteran.belongsTo(sequelize.models.Proyek, {
      foreignKey: "ProyekId"
    });
    PerhitunganPlesteran.belongsTo(sequelize.models.Semen, {
      foreignKey: "SemenId"
    });

    PerhitunganPlesteran.belongsTo(sequelize.models.Pasir, {
      foreignKey: "PasirId"
    });
  };
  return PerhitunganPlesteran;
};