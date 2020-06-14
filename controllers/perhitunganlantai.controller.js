const {
  PerhitunganLantai,
  Proyek,
  Keramik,
  Semen,
  Pasir,
  Semenat
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
  const { ProyekId } = req.params
  let errors = []
  if (ProyekId) {
    try {
      const perhitunganlantai = await PerhitunganLantai.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganlantai === null || perhitunganlantai === "") {
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
    const perhitunganlantai = await PerhitunganLantai.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganlantai
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function validate(req) {
  let {
    KeramikId,
    SemenId,
    PasirId,
    SemeNatId,
    panjanglan,
    tinggilan,
    luas_lantai,
    toleransi,
    jumlahkeperluankeramik,
    jumlahkeperluanpasir,
    jumlahkeperluansemen,
    jumlahdalamsak,
    jumlahkeperluannat,
    metode,
    hargakeramik,
    hargapasir,
    hargasemen,
    harganat,
    hargatotal
  } = req.body

  let errors = []


  if (!KeramikId) {
    errors.push({
      field: 'KeramikId',
      message: 'KeramikId is required',
    })
  }
  if (!SemenId) {
    errors.push({
      field: 'SemenId',
      message: 'SemenId is required',
    })
  }
  if (!PasirId) {
    errors.push({
      field: 'PasirId',
      message: 'PasirId is required',
    })
  }
  if (!SemeNatId) {
    errors.push({
      field: 'SemeNatId',
      message: 'SemeNatId is required',
    })
  }
  if (!luas_lantai) {
    errors.push({
      field: 'luas_lantai',
      message: 'luas_lantai is required',
    })
  }

  if (!jumlahkeperluankeramik) {
    errors.push({
      field: 'jumlahkeperluankeramik',
      message: 'jumlahkeperluankeramik is required',
    })
  }
  if (!jumlahkeperluanpasir) {
    errors.push({
      field: 'jumlahkeperluanpasir',
      message: 'jumlahkeperluanpasir is required',
    })
  }
  if (!jumlahkeperluansemen) {
    errors.push({
      field: 'jumlahkeperluansemen',
      message: 'jumlahkeperluansemen is required',
    })
  }
  if (!jumlahkeperluannat) {
    errors.push({
      field: 'jumlahkeperluannat',
      message: 'jumlahkeperluannat is required',
    })
  }
  if (!metode) {
    errors.push({
      field: 'metode',
      message: 'metode is required',
    })
  }
  if (!hargakeramik) {
    errors.push({
      field: 'hargakeramik',
      message: 'hargakeramik is required',
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
  if (!harganat) {
    errors.push({
      field: 'harganat',
      message: 'harganat is required',
    })
  }


  return errors
}

exports.actionCreate = async (req, res) => {

  let {
    KeramikId,
    SemenId,
    PasirId,
    SemeNatId,
    panjanglan,
    tinggilan,
    luas_lantai,
    toleransi,
    jumlahkeperluankeramik,
    jumlahkeperluanpasir,
    jumlahkeperluansemen,
    jumlahdalamsak,
    jumlahkeperluannat,
    metode,
    hargakeramik,
    hargapasir,
    hargasemen,
    harganat
  } = req.body

  var total = parseFloat(hargakeramik) + parseFloat(hargapasir) + parseFloat(hargasemen) + parseFloat(harganat)
  const hargatotal = total


  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganlantai = await PerhitunganLantai.create({
      KeramikId,
      SemenId,
      PasirId,
      SemeNatId,
      panjanglan,
      tinggilan,
      luas_lantai,
      toleransi,
      jumlahkeperluankeramik,
      jumlahkeperluanpasir,
      jumlahkeperluansemen,
      jumlahdalamsak,
      jumlahkeperluannat,
      metode,
      hargakeramik,
      hargapasir,
      hargasemen,
      harganat,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitunganlantai",
      perhitunganlantai
    })

  } catch (err) {
    console.log(err)
  }
}
exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganLantai.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganLantai) => {
      return PerhitunganLantai.destroy()
    })
    .then((PerhitunganLantai) => {
      res.status(200).json({ message: "Success Delete", PerhitunganLantai })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}