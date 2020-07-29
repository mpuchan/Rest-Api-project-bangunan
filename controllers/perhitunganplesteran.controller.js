const {
  PerhitunganPlesteran
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
  const { ProyekId } = req.params
  let errors = []
  if (ProyekId) {
    try {
      const perhitunganplesteran = await PerhitunganPlesteran.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganplesteran === null || perhitunganplesteran === "") {
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
    const perhitunganplesteran = await PerhitunganPlesteran.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganplesteran
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
    panjangdin,
    tinggidin,
    tebal,
    sisi,
    volume,
    nama_semen,
    nama_pasir,
    jumlahkeperluanpasir,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargapasir,
    hargasemen,
    hargapasirtotal,
    hargasementotal,
    hargatotal
  } = req.body

  let errors = []


  if (!volume) {
    errors.push({
      field: 'volume',
      message: 'volume is required',
    })
  }
  if (!nama) {
    errors.push({
      field: 'nama',
      message: 'nama is required',
    })
  }
  if (!jumlahkeperluanpasir) {
    errors.push({
      field: 'jumlahkeperluanpasir',
      message: 'jumlahkeperluanpasir is required',
    })
  }

  if (!metode) {
    errors.push({
      field: 'metode',
      message: 'metode is required',
    })
  }

  if (!hargapasir) {
    errors.push({
      field: 'hargapasir',
      message: 'hargapasir is required',
    })
  }
  if (!hargasemen) {
    errors.push({
      field: 'hargasemen',
      message: 'hargasemen is required',
    })
  }


  return errors
}

exports.actionCreate = async (req, res) => {

  let {
    ProyekId,
    nama,
    jenis_pengerjaan,
    panjangdin,
    tinggidin,
    tebal,
    sisi,
    volume,
    nama_semen,
    nama_pasir,
    jumlahkeperluanpasir,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargapasir,
    hargasemen,
    hargapasirtotal,
    hargasementotal
  } = req.body

  var total = parseFloat(hargapasirtotal) + parseFloat(hargasementotal)
  const hargatotal = total


  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganplesteran = await PerhitunganPlesteran.create({
      ProyekId,
      nama,
      jenis_pengerjaan,
      panjangdin,
      tinggidin,
      tebal,
      sisi,
      volume,
      nama_semen,
      nama_pasir,
      jumlahkeperluanpasir,
      Jumlahkeperluansemen,
      jumlahdalamsak,
      metode,
      hargapasir,
      hargasemen,
      hargapasirtotal,
      hargasementotal,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitunganplesteran",
      perhitunganplesteran
    })

  } catch (err) {
    console.log(err)
  }
}
async function validateRead(req) {
  const { id } = req.params
  let errors = []
  if (id) {
    try {
      const perhitunganplesteran = await PerhitunganPlesteran.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (perhitunganplesteran === null || perhitunganplesteran === "") {
        errors.push({
          field: 'id',
          message: 'Id Not Found',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return errors
}
exports.actionUpdate = async function (req, res) {
  const { id } = req.params
  let {
    ProyekId,
    nama,
    jenis_pengerjaan,
    panjangdin,
    tinggidin,
    tebal,
    sisi,
    volume,
    nama_semen,
    nama_pasir,
    jumlahkeperluanpasir,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargapasir,
    hargasemen,
    hargapasirtotal,
    hargasementotal,
    hargatotal
  } = req.body

  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganplesteran = await PerhitunganPlesteran.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganplesteran) {
      perhitunganplesteran.nama = nama
      perhitunganplesteran.jenis_pengerjaan = jenis_pengerjaan
      perhitunganplesteran.panjangdin = panjangdin
      perhitunganplesteran.tinggidin = tinggidin
      perhitunganplesteran.sisi = sisi
      perhitunganplesteran.tebal = tebal
      perhitunganplesteran.volume = volume
      perhitunganplesteran.nama_semen = nama_semen
      perhitunganplesteran.nama_pasir = nama_pasir
      perhitunganplesteran.jumlahkeperluanpasir = jumlahkeperluanpasir
      perhitunganplesteran.Jumlahkeperluansemen = Jumlahkeperluansemen
      perhitunganplesteran.jumlahdalamsak = jumlahdalamsak
      perhitunganplesteran.metode = metode
      perhitunganplesteran.hargapasir = hargapasir
      perhitunganplesteran.hargasemen = hargasemen
      perhitunganplesteran.hargapasirtotal = hargapasirtotal
      perhitunganplesteran.hargasementotal = hargasementotal
      perhitunganplesteran.hargatotal = hargatotal
      await perhitunganplesteran.save()
    }

    return res.status(201).json({
      message: "Success Update perhitunganplesteran",
      perhitunganplesteran
    })
  } catch (err) {
    console.log(err)
  }
}
exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganPlesteran.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganPlesteran) => {
      return PerhitunganPlesteran.destroy()
    })
    .then((PerhitunganPlesteran) => {
      res.status(200).json({ message: "Success Delete", PerhitunganPlesteran })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}