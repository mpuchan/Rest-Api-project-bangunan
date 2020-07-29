const {
  PerhitunganPondasi
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
  const { ProyekId } = req.params
  let errors = []
  if (ProyekId) {
    try {
      const perhitunganpondasi = await PerhitunganPondasi.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganpondasi === null || perhitunganpondasi === "") {
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
    const perhitunganpondasi = await PerhitunganPondasi.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganpondasi
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
    a,
    b,
    t,
    p,
    luas,
    metode,
    namasemen,
    namapasir,
    namabatu,
    hargasemen,
    hargapasir,
    hargabatukali,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpasir,
    jumlahbatu,
    jumlahbatutruk,
    hargasementotal,
    hargapasirtotal,
    hargabatutotal,
    hargatotal
  } = req.body

  let errors = []


  if (!nama) {
    errors.push({
      field: 'nama',
      message: 'nama is required',
    })
  }
  if (!a) {
    errors.push({
      field: 'a',
      message: 'a is required',
    })
  } if (!jumlahsemen) {
    errors.push({
      field: 'jumlahsemen',
      message: 'jumlahsemen is required',
    })
  }
  // if (!hargatotal) {
  //   errors.push({
  //     field: 'hargatotal',
  //     message: 'hargatotal is required',
  //   })
  // }

  return errors
}

exports.actionCreate = async (req, res) => {

  let {
    ProyekId,
    nama,
    a,
    b,
    t,
    p,
    luas,
    metode,
    namasemen,
    namapasir,
    namabatu,
    hargasemen,
    hargapasir,
    hargabatukali,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpasir,
    jumlahbatu,
    jumlahbatutruk,
    hargasementotal,
    hargapasirtotal,
    hargabatutotal
  } = req.body

  var total = parseFloat(hargabatutotal) + parseFloat(hargapasirtotal) + parseFloat(hargasementotal)
  const hargatotal = total


  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganpondasi = await PerhitunganPondasi.create({
      ProyekId,
      nama,
      a,
      b,
      t,
      p,
      luas,
      metode,
      namasemen,
      namapasir,
      namabatu,
      hargasemen,
      hargapasir,
      hargabatukali,
      jumlahsemen,
      jumlahsemendalamsak,
      jumlahpasir,
      jumlahbatu,
      jumlahbatutruk,
      hargasementotal,
      hargapasirtotal,
      hargabatutotal,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitunganpondasi",
      perhitunganpondasi
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
      const perhitunganpondasi = await PerhitunganPondasi.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (perhitunganpondasi === null || perhitunganpondasi === "") {
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
    nama,
    a,
    b,
    t,
    p,
    luas,
    metode,
    namasemen,
    namapasir,
    namabatu,
    hargasemen,
    hargapasir,
    hargabatukali,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpasir,
    jumlahbatu,
    jumlahbatutruk,
    hargasementotal,
    hargapasirtotal,
    hargabatutotal,
    hargatotal
  } = req.body
  // let errors = await validate(req)
  // if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganpondasi = await PerhitunganPondasi.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganpondasi) {
      perhitunganpondasi.nama = nama
      perhitunganpondasi.a = a
      perhitunganpondasi.b = b
      perhitunganpondasi.t = t
      perhitunganpondasi.p = p
      perhitunganpondasi.luas = luas
      perhitunganpondasi.metode = metode
      perhitunganpondasi.namasemen = namasemen
      perhitunganpondasi.namapasir = namapasir
      perhitunganpondasi.namabatu = namabatu
      perhitunganpondasi.hargasemen = hargasemen
      perhitunganpondasi.hargapasir = hargapasir
      perhitunganpondasi.hargabatukali = hargabatukali
      perhitunganpondasi.jumlahsemen = jumlahsemen
      perhitunganpondasi.jumlahsemendalamsak = jumlahsemendalamsak
      perhitunganpondasi.jumlahpasir = jumlahpasir
      perhitunganpondasi.jumlahbatu = jumlahbatu
      perhitunganpondasi.jumlahbatutruk = jumlahbatutruk
      perhitunganpondasi.hargasementotal = hargasementotal
      perhitunganpondasi.hargapasirtotal = hargapasirtotal
      perhitunganpondasi.hargabatutotal = hargabatutotal
      perhitunganpondasi.hargatotal = hargatotal
      await perhitunganpondasi.save()
    }

    return res.status(201).json({
      message: "Success Update perhitunganpondasi",
      perhitunganpondasi
    })
  } catch (err) {
    console.log(err)
  }
}
exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganPondasi.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganPondasi) => {
      return PerhitunganPondasi.destroy()
    })
    .then((PerhitunganPondasi) => {
      res.status(200).json({ message: "Success Delete", PerhitunganPondasi })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}