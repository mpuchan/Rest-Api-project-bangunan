const {
  PerhitunganAtap
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
  const { ProyekId } = req.params
  let errors = []
  if (ProyekId) {
    try {
      const perhitunganAtap = await PerhitunganAtap.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganatap === null || perhitunganatap === "") {
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
    const perhitunganatap = await PerhitunganAtap.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganatap
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
    luasatap,
    panjangnok,
    namagenteng,
    namabubungan,
    namasemen,
    namapasir,
    hargasemen,
    hargapasir,
    hargagenteng,
    hargabubungan,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpasir,
    jumlahgenteng,
    jumlahbubungan,
    hargatotalsemen,
    hargatotalpasir,
    hargatotalgenteng,
    hargatotalbubungan,
    hargatotal
  } = req.body

  let errors = []


  if (!nama) {
    errors.push({
      field: 'nama',
      message: 'nama is required',
    })
  }
  if (!luasatap) {
    errors.push({
      field: 'luasatap',
      message: 'luasatap is required',
    })
  }
  if (!panjangnok) {
    errors.push({
      field: 'panjangnok',
      message: 'panjangnok is required',
    })
  }
  if (!jumlahsemen) {
    errors.push({
      field: 'jumlahsemen',
      message: 'jumlahsemen is required',
    })
  }

  return errors
}

exports.actionCreate = async (req, res) => {

  let {
    ProyekId,
    nama,
    luasatap,
    panjangnok,
    namagenteng,
    namabubungan,
    namasemen,
    namapasir,
    hargasemen,
    hargapasir,
    hargagenteng,
    hargabubungan,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpasir,
    jumlahgenteng,
    jumlahbubungan,
    hargatotalsemen,
    hargatotalpasir,
    hargatotalgenteng,
    hargatotalbubungan
  } = req.body

  var total = parseFloat(hargatotalsemen) + parseFloat(hargatotalpasir) + parseFloat(hargatotalgenteng) + parseFloat(hargatotalbubungan)
  const hargatotal = total


  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganatap = await PerhitunganAtap.create({
      ProyekId,
      nama,
      luasatap,
      panjangnok,
      namagenteng,
      namabubungan,
      namasemen,
      namapasir,
      hargasemen,
      hargapasir,
      hargagenteng,
      hargabubungan,
      jumlahsemen,
      jumlahsemendalamsak,
      jumlahpasir,
      jumlahgenteng,
      jumlahbubungan,
      hargatotalsemen,
      hargatotalpasir,
      hargatotalgenteng,
      hargatotalbubungan,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitunganatap",
      perhitunganatap
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
      const perhitunganatap = await PerhitunganAtap.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (perhitunganatap === null || perhitunganAtap === "") {
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
    luasatap,
    panjangnok,
    namagenteng,
    namabubungan,
    namasemen,
    namapasir,
    hargasemen,
    hargapasir,
    hargagenteng,
    hargabubungan,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpasir,
    jumlahgenteng,
    jumlahbubungan,
    hargatotalsemen,
    hargatotalpasir,
    hargatotalgenteng,
    hargatotalbubungan,
    hargatotal
  } = req.body
  // let errors = await validate(req)
  // if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganatap = await PerhitunganAtap.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganatap) {
      perhitunganatap.nama = nama
      perhitunganatap.luasatap = luasatap
      perhitunganatap.panjangnok = panjangnok
      perhitunganatap.namagenteng = namagenteng
      perhitunganatap.namabubungan = namabubungan
      perhitunganatap.namasemen = namasemen
      perhitunganatap.namapasir = namapasir
      perhitunganatap.hargasemen = hargasemen
      perhitunganatap.hargapasir = hargapasir
      perhitunganatap.hargagenteng = hargagenteng
      perhitunganatap.hargabubungan = hargabubungan
      perhitunganatap.jumlahsemen = jumlahsemen
      perhitunganatap.jumlahsemendalamsak = jumlahsemendalamsak
      perhitunganatap.jumlahpasir = jumlahpasir
      perhitunganatap.jumlahgenteng = jumlahgenteng
      perhitunganatap.jumlahbubungan = jumlahbubungan
      perhitunganatap.hargatotalsemen = hargatotalsemen
      perhitunganatap.hargatotalpasir = hargatotalpasir
      perhitunganatap.hargatotalgenteng = hargatotalgenteng
      perhitunganatap.hargatotalbubungan = hargatotalbubungan
      perhitunganatap.hargatotal = hargatotal

      await perhitunganatap.save()
    }

    return res.status(201).json({
      message: "Success Update perhitunganatap",
      perhitunganatap
    })
  } catch (err) {
    console.log(err)
  }
}
exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganAtap.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganAtap) => {
      return PerhitunganAtap.destroy()
    })
    .then((PerhitunganAtap) => {
      res.status(200).json({ message: "Success Delete", PerhitunganAtap })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}