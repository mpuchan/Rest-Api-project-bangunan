const {
  PerhitunganBidangBangunan,
  Proyek,
  Batako,
  Semen,
  Pasir
} = require("../models")

const Op = require("sequelize").Op

/**
 * include relasi
 */
let include = {
  include: [
    { model: Batako },
  ]
}

async function validateId(req) {
  const { ProyekId } = req.params
  // const { BatakoId } = req.params
  // const { SemenId } = req.params
  // const { PasirId } = req.params

  let errors = []
  if (ProyekId) {
    try {
      const perhitunganbidang = await PerhitunganBidangBangunan.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganbidang === null || perhitunganbidang === "") {
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

exports.viewBatako = async (req, res) => {
  try {
    const batakos = await Batako.findAll()
    return res.status(200).json({
      message: "Success Read batako",
      batakos
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}
exports.viewSemen = async (req, res) => {
  try {
    const semens = await Semen.findAll()
    return res.status(200).json({
      message: "Success Read Semen",
      semens
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}
exports.viewPasir = async (req, res) => {
  try {
    const pasirs = await Pasir.findAll()
    return res.status(200).json({
      message: "Success Read Pasir",
      pasirs
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}


/**
 * read data proyek by PengembangId
 * 
 * @param object req
 * @param object res 
 * @return json
 */
exports.actionReadAllSingleData = async (req, res) => {
  const { ProyekId } = req.params

  try {
    const perhitunganbidang = await PerhitunganBidangBangunan.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganbidang
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function validate(req) {
  let {
    BatakoId,
    SemenId,
    PasirId,
    panjangbid,
    tinggibid,
    panjangpin,
    tinggipin,
    panjangjen,
    tinggijen,
    luas_bidang,
    jumlahkeperluanbatako,
    jumlahkeperluanpasir,
    jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargabatako,
    hargapasir,
    hargasemen,
    hargatotal,
    name,
    jenis
  } = req.body

  let errors = []


  if (!BatakoId) {
    errors.push({
      field: 'BatakoId',
      message: 'BatakoId is required',
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
  if (!luas_bidang) {
    errors.push({
      field: 'luas_bidang',
      message: 'luas_bidang is required',
    })
  }

  if (!jumlahkeperluanbatako) {
    errors.push({
      field: 'jumlahkeperluanbatako',
      message: 'jumlahkeperluanbatako is required',
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
  if (!metode) {
    errors.push({
      field: 'metode',
      message: 'metode is required',
    })
  }
  if (!hargabatako) {
    errors.push({
      field: 'hargabatako',
      message: 'hargabatako is required',
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
    BatakoId,
    SemenId,
    PasirId,
    panjangbid,
    tinggibid,
    panjangpin,
    tinggipin,
    panjangjen,
    tinggijen,
    luas_bidang,
    jumlahkeperluanbatako,
    jumlahkeperluanpasir,
    jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargabatako,
    hargapasir,
    hargasemen,
    name,
    jenis
  } = req.body

  var total = parseFloat(hargabatako) + parseFloat(hargapasir) + parseFloat(hargasemen)
  const hargatotal = total


  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganbidang = await PerhitunganBidangBangunan.create({
      ProyekId,
      BatakoId,
      SemenId,
      PasirId,
      panjangbid,
      tinggibid,
      panjangpin,
      tinggipin,
      panjangjen,
      tinggijen,
      luas_bidang,
      jumlahkeperluanbatako,
      jumlahkeperluanpasir,
      jumlahkeperluansemen,
      jumlahdalamsak,
      metode,
      hargabatako,
      hargapasir,
      hargasemen,
      hargatotal,
      name,
      jenis
    })

    return res.status(200).json({
      message: "Success Create perhitungandinding",
      perhitunganbidang
    })

  } catch (err) {
    console.log(err)
  }
}

// async function validateRead(req) {
//   const { id } = req.params
//   let errors = []
//   if (id) {
//     try {
//       const proyek = await Proyek.findOne({
//         where: {
//           id: { [Op.eq]: id },
//         }
//       })
//       if (proyek === null || proyek === "") {
//         errors.push({
//           field: 'id',
//           message: 'Id Not Found',
//         })
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   return errors
// }

// exports.actionReadSingleproyek = async (req, res) => {
//   const { id } = req.params

//   let error = await validateRead(req)
//   if (error.length > 0) return res.status(422).json({ error })

//   try {
//     const proyek = await Proyek.findOne({
//       ...include,
//       where: { id: { [Op.eq]: id } }
//     })

//     return res.status(201).json({
//       message: "Success Read Single Proyek",
//       Pengembang
//     })
//   } catch (err) {
//     console.log(err)
//     throw err
//   }
// }

// exports.actionUpdate = async function (req, res) {
//   const { id } = req.params
//   let {
//     nama_proyek,
//     lokasi,
//     tanggal
//   } = req.body

//   let errors = await validate(req)
//   if (errors.length > 0) return res.status(422).json({ errors });

//   try {
//     const proyek = await Proyek.findOne({
//       where: { id: { [Op.eq]: id } }
//     })

//     if (proyek) {
//       proyek.nama_proyek = nama_proyek
//       proyek.lokasi = lokasi
//       proyek.tanggal = tanggal
//       await proyek.save()
//     }

//     return res.status(201).json({
//       message: "Success Update Proyek",
//       proyek
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganBidangBangunan.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganBidangBangunan) => {
      return PerhitunganBidangBangunan.destroy()
    })
    .then((PerhitunganBidangBangunan) => {
      res.status(200).json({ message: "Success Delete", PerhitunganBidangBangunan })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}