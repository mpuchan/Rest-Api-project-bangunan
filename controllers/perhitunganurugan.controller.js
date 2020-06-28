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
    nama,
    jenis_pengerjaan,
    panjang,
    lebar,
    tinggi,
    volume,
    volumejadi,
    nama_pasir,
    jumlahkeperluanpasir,
    jumlahdalamtruk,
    hargapasir,
    hargatotal
  } = req.body

  let errors = []



  return errors
}

exports.actionCreate = async (req, res) => {

  let {
    ProyekId,
    nama,
    jenis_pengerjaan,
    panjang,
    lebar,
    tinggi,
    volume,
    volumejadi,
    nama_pasir,
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
      nama,
      jenis_pengerjaan,
      panjang,
      lebar,
      tinggi,
      volume,
      volumejadi,
      nama_pasir,
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
exports.actionUpdate = async function (req, res) {
  const { id } = req.params
  let {
    nama,
    jenis_pengerjaan,
    panjang,
    lebar,
    tinggi,
    volume,
    volumejadi,
    nama_pasir,
    jumlahkeperluanpasir,
    jumlahdalamtruk,
    hargapasir,
    hargatotal
  } = req.body
  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganurugan = await PerhitunganUrugan.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganurugan) {
      perhitunganurugan.nama = nama
      perhitunganurugan.jenis_pengerjaan = jenis_pengerjaan
      perhitunganurugan.panjang = panjang
      perhitunganurugan.tinggi = tinggi
      perhitunganurugan.lebar = lebar
      perhitunganurugan.volume = volume
      perhitunganurugan.volumejadi = volumejadi
      perhitunganurugan.nama_pasir = nama_pasir
      perhitunganurugan.jumlahkeperluanpasir = jumlahkeperluanpasir
      perhitunganurugan.jumlahdalamtruk = jumlahdalamtruk
      perhitunganurugan.hargapasir = hargapasir
      perhitunganurugan.hargatotal = hargatotal
      await perhitunganurugan.save()
    }

    return res.status(201).json({
      message: "Success Update perhitunganurugan",
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