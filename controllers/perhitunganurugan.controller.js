const {
  PerhitunganUrugan,
  Proyek,
  Pasir
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
  const { ProyekId } = req.params

  let errors = []
  if (ProyekId) {
    try {
      const perhitunganurugan = await PerhitunganUrugan.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganurugan === null || perhitunganurugan === "") {
        errors.push({
          field: 'ProyekId',
          message: 'ProyekId Not Found',
        })
      }
    } catch (err) {
      throw err
    }
  }
  return errors
}

exports.actionReadAllSingleData = async (req, res) => {
  const { ProyekId } = req.params

  try {
    const perhitunganurugan = await PerhitunganUrugan.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganurugan
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function validate(req) {
  let {
    ProyekId,
    PasirId,
    panjang,
    lebar,
    tinggi,
    luas,
    luasjadi,
    jumlahkeperluanpasir,
    jumlahdalamtruk,
    hargapasir,
    hargatotal
  } = req.body

  let errors = []

  if (!PasirId) {
    errors.push({
      field: 'PasirId',
      message: 'PasirId is required',
    })
  }

  if (!luasjadi) {
    errors.push({
      field: 'luasjadi',
      message: 'luasjadi is required',
    })
  }

  if (!jumlahkeperluanpasir) {
    errors.push({
      field: 'jumlahkeperluanpasir',
      message: 'jumlahkeperluanpasir is required',
    })
  }

  if (!hargapasir) {
    errors.push({
      field: 'hargapasir',
      message: 'hargapasir is required',
    })
  }


  return errors
}

exports.actionCreate = async (req, res) => {

  let {
    ProyekId,
    PasirId,
    panjang,
    lebar,
    tinggi,
    luas,
    luasjadi,
    jumlahkeperluanpasir,
    jumlahdalamtruk,
    hargapasir,
    hargatotal
  } = req.body

  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganurugan = await PerhitunganUrugan.create({
      ProyekId,
      PasirId,
      panjang,
      lebar,
      tinggi,
      luas,
      luasjadi,
      jumlahkeperluanpasir,
      jumlahdalamtruk,
      hargapasir,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitunganurugan",
      perhitunganurugan
    })

  } catch (err) {
    console.log(err)
  }
}
exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganUrugan.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganUrugan) => {
      return PerhitunganUrugan.destroy()
    })
    .then((PerhitunganUrugan) => {
      res.status(200).json({ message: "Success Delete", PerhitunganUrugan })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}