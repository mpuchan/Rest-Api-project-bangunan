'use strict'
module.exports = (sequelize, DataTypes) => {
  const Proyek = sequelize.define('Proyek', {
    id_user: DataTypes.INTEGER,
    nama_proyek: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    tanggal: DataTypes.DATE
  }, {})
  Proyek.associate = function (models) {
    Proyek.belongsTo(sequelize.models.User, {
      foreignKey: "id_user"
    })
  }
  return Proyek
}