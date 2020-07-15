const {
  PerhitunganAcian
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
  const { ProyekId } = req.params
  let errors = []
  if (ProyekId) {
    try {
      const perhitunganacian = await PerhitunganAcian.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganacian === null || perhitunganacian === "") {
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
    const perhitunganacian = await PerhitunganAcian.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganacian
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
    sisi,
    luas,
    nama_semen,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargasemen,
    hargasementotal,
    hargatotal
  } = req.body

  let errors = []

  // if (!luas) {
  //   errors.push({
  //     field: 'luas_lantai',
  //     message: 'luas_lantai is required',
  //   })
  // }

  // if (!metode) {
  //   errors.push({
  //     field: 'metode',
  //     message: 'metode is required',
  //   })
  // }
  // if (!hargasemen) {
  //   errors.push({
  //     field: 'hargasemen',
  //     message: 'hargasemen is required',
  //   })
  // }

  return errors
}

exports.actionCreate = async (req, res) => {

  let {
    ProyekId,
    nama,
    jenis_pengerjaan,
    panjangdin,
    tinggidin,
    sisi,
    luas,
    nama_semen,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargasemen,
    hargasementotal,
    hargatotal
  } = req.body


  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganacian = await PerhitunganAcian.create({
      ProyekId,
      nama,
      jenis_pengerjaan,
      panjangdin,
      tinggidin,
      sisi,
      luas,
      nama_semen,
      Jumlahkeperluansemen,
      jumlahdalamsak,
      metode,
      hargasemen,
      hargasementotal,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitunganacian",
      perhitunganacian
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
      const perhitunganacian = await PerhitunganAcian.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (perhitunganacian === null || perhitunganacian === "") {
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
    jenis_pengerjaan,
    panjangdin,
    tinggidin,
    sisi,
    luas,
    nama_semen,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargasemen,
    hargasementotal,
    hargatotal
  } = req.body
  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganacian = await PerhitunganAcian.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganacian) {
      perhitunganacian.nama = nama
      perhitunganacian.jenis_pengerjaan = jenis_pengerjaan
      perhitunganacian.panjangdin = panjangdin
      perhitunganacian.tinggidin = tinggidin
      perhitunganacian.sisi = sisi
      perhitunganacian.luas = luas
      perhitunganacian.nama_semen = nama_semen
      perhitunganacian.Jumlahkeperluansemen = Jumlahkeperluansemen
      perhitunganacian.jumlahdalamsak = jumlahdalamsak
      perhitunganacian.metode = metode
      perhitunganacian.hargasemen = hargasemen
      perhitunganacian.hargasementotal = hargasementotal
      perhitunganacian.hargatotal = hargatotal
      await perhitunganacian.save()
    }

    return res.status(201).json({
      message: "Success Update perhitunganacian",
      perhitunganacian
    })
  } catch (err) {
    console.log(err)
  }
}
exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganAcian.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganAcian) => {
      return PerhitunganAcian.destroy()
    })
    .then((PerhitunganAcian) => {
      res.status(200).json({ message: "Success Delete", PerhitunganAcian })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}