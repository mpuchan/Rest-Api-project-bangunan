const {
  Proyek
} = require("../models")
const {
  Pengembang
} = require("../models")
const Op = require("sequelize").Op

/**
 * include relasi
 */
let include = {
  include: [
    { model: Pengembang },
  ]
}

async function validatePengembangId(req) {
  const { PengembangId } = req.params
  let errors = []
  if (PengembangId) {
    try {
      const proyek = await Proyek.findOne({
        where: {
          PengembangId: { [Op.eq]: PengembangId },
        }
      })
      if (proyek === null || proyek === "") {
        errors.push({
          field: 'PengembangId',
          message: 'PengembangId Not Found',
        })
      }
    } catch (err) {
      throw err
    }
  }
  return errors
}

/**
 * read data proyek by PengembangId
 * 
 * @param object req
 * @param object res 
 * @return json
 */
exports.actionReadAllSinglePengembang = async (req, res) => {
  const { PengembangId } = req.params

  try {
    const proyek = await Proyek.findAll({
      where: {
        PengembangId: { [Op.eq]: PengembangId }
      }
    })

    // const Obj = {
    //   id: proyek.id,
    //   PengembangId: proyek.PengembangId,
    //   nama_proyek: proyek.nama_proyek,
    //   lokasi: proyek.lokasi,
    //   tanggal: proyek.tanggal
    // }
    // res.send(JSON.stringify(Obj))

    return res.status(200).json({
      message: "Success Read Proyek",
      proyek
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function validate(req) {
  let {
    nama_proyek,
    lokasi,
    tanggal
  } = req.body

  let errors = []


  // if (!nama_proyek) {
  //   errors.push({
  //     field: 'nama_proyek',
  //     message: 'nama proyek is required',
  //   })
  // }
  // if (!lokasi) {
  //   errors.push({
  //     field: 'lokasi',
  //     message: 'lokasi is required',
  //   })
  // }
  // if (!tanggal) {
  //   errors.push({
  //     field: 'tanggal',
  //     message: 'tanggal is required',
  //   })
  // }

  return errors
}

exports.actionCreate = async (req, res) => {
  let {
    PengembangId,
    nama_proyek,
    luas_tanah,
    luas_bangunan,
    lokasi,
    tanggal
  } = req.body

  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const proyek = await Proyek.create({
      PengembangId,
      nama_proyek,
      luas_tanah,
      luas_bangunan,
      lokasi,
      tanggal
    })

    return res.status(200).json({
      message: "Success Create Proyek",
      proyek
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
      const proyek = await Proyek.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (proyek === null || proyek === "") {
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

exports.actionReadSingleproyek = async (req, res) => {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  try {
    const proyek = await Proyek.findOne({
      ...include,
      where: { id: { [Op.eq]: id } }
    })

    return res.status(201).json({
      message: "Success Read Single Proyek",
      Pengembang
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.actionUpdate = async function (req, res) {
  const { id } = req.params
  let {
    nama_proyek,
    lokasi,
    luas_bangunan,
    luas_tanah,
    tanggal
  } = req.body

  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const proyek = await Proyek.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (proyek) {
      proyek.nama_proyek = nama_proyek
      proyek.lokasi = lokasi
      proyek.luas_bangunan = luas_bangunan
      proyek.luas_tanah = luas_tanah
      proyek.tanggal = tanggal
      await proyek.save()
    }

    return res.status(201).json({
      message: "Success Update Proyek",
      proyek
    })
  } catch (err) {
    console.log(err)
  }
}

exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  Proyek.findOne({ where: { id: { [Op.eq]: id } } })
    .then((proyek) => {
      return proyek.destroy()
    })
    .then((proyek) => {
      res.status(200).json({ message: "Success Delete", proyek })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}