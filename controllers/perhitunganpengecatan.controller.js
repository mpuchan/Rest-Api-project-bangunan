const {
  PerhitunganPengecatan
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
  const { ProyekId } = req.params
  let errors = []
  if (ProyekId) {
    try {
      const perhitunganpengecatan = await PerhitunganPengecatan.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganpengecatan === null || perhitunganpengecatan === "") {
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
    const perhitunganpengecatan = await PerhitunganPengecatan.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganpengecatan
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
    luas_pengecatan,
    nama_cat,
    nama_plamur,
    jumlahkeperluancat,
    jumlahkeperluanplamur,
    jumlahkeperluancatkaleng,
    jumlahkeperluanplamursak,
    hargacat,
    hargaplamur,
    hargacattotal,
    hargaplamurtotal,
    hargatotal
  } = req.body

  let errors = []

  if (!luas_pengecatan) {
    errors.push({
      field: 'luas_pengecatan',
      message: 'luas_pengecatan is required',
    })
  }
  if (!nama) {
    errors.push({
      field: 'nama',
      message: 'nama is required',
    })
  }
  if (!hargacat) {
    errors.push({
      field: 'hargacat',
      message: 'hargacat is required',
    })
  }
  if (!hargaplamur) {
    errors.push({
      field: 'hargaplamur',
      message: 'hargaplamur is required',
    })
  }
  if (!jumlahkeperluancat) {
    errors.push({
      field: ' jumlahkeperluancat',
      message: ' jumlahkeperluancat is required',
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
    sisi,
    luas_pengecatan,
    nama_cat,
    nama_plamur,
    jumlahkeperluancat,
    jumlahkeperluanplamur,
    jumlahkeperluancatkaleng,
    jumlahkeperluanplamursak,
    hargacat,
    hargaplamur,
    hargacattotal,
    hargaplamurtotal
  } = req.body
  var total = parseFloat(hargaplamurtotal) + parseFloat(hargacattotal)
  const hargatotal = total

  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganpengecatan = await PerhitunganPengecatan.create({
      ProyekId,
      nama,
      jenis_pengerjaan,
      panjangdin,
      tinggidin,
      sisi,
      luas_pengecatan,
      nama_cat,
      nama_plamur,
      jumlahkeperluancat,
      jumlahkeperluanplamur,
      jumlahkeperluancatkaleng,
      jumlahkeperluanplamursak,
      hargacat,
      hargaplamur,
      hargacattotal,
      hargaplamurtotal,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitunganpengecatan",
      perhitunganpengecatan
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
      const perhitunganpengecatan = await PerhitunganPengecatan.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (perhitunganpengecatan === null || perhitunganpengecatan === "") {
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
    luas_pengecatan,
    nama_cat,
    nama_plamur,
    jumlahkeperluancat,
    jumlahkeperluanplamur,
    jumlahkeperluancatkaleng,
    jumlahkeperluanplamursak,
    hargacat,
    hargaplamur,
    hargacattotal,
    hargaplamurtotal,
    hargatotal
  } = req.body
  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganpengecatan = await PerhitunganPengecatan.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganpengecatan) {
      perhitunganpengecatan.nama = nama
      perhitunganpengecatan.jenis_pengerjaan = jenis_pengerjaan
      perhitunganpengecatan.panjangdin = panjangdin
      perhitunganpengecatan.tinggidin = tinggidin
      perhitunganpengecatan.sisi = sisi
      perhitunganpengecatan.luas_pengecatan = luas_pengecatan
      perhitunganpengecatan.nama_cat = nama_cat
      perhitunganpengecatan.nama_plamur = nama_plamur
      perhitunganpengecatan.jumlahkeperluancat = jumlahkeperluancat
      perhitunganpengecatan.jumlahkeperluanplamur = jumlahkeperluanplamur
      perhitunganpengecatan.jumlahkeperluancatkaleng = jumlahkeperluancatkaleng
      perhitunganpengecatan.jumlahkeperluanplamursak = jumlahkeperluanplamursak
      perhitunganpengecatan.hargacat = hargacat
      perhitunganpengecatan.hargaplamur = hargaplamur
      perhitunganpengecatan.hargacattotal = hargacattotal
      perhitunganpengecatan.hargaplamurtotal = hargaplamurtotal
      perhitunganpengecatan.hargatotal = hargatotal
      await perhitunganpengecatan.save()
    }
    return res.status(201).json({
      message: "Success Update perhitunganpengecatan",
      perhitunganpengecatan
    })
  } catch (err) {
    console.log(err)
  }
}
exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganPengecatan.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganPengecatan) => {
      return PerhitunganPengecatan.destroy()
    })
    .then((PerhitunganPengecatan) => {
      res.status(200).json({ message: "Success Delete", PerhitunganPengecatan })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}