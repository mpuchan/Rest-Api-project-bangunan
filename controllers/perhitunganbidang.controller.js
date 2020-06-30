const {
  PerhitunganBidangBangunan,
  Material,
} = require("../models")

const Op = require("sequelize").Op

/**
 * include relasi
 */
let include = {

}

async function validateId(req) {
  const { ProyekId } = req.params

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

exports.sumtotal = async (req, res) => {
  try {
    const { ProyekId } = req.params
    const perhitunganbidangsum = await PerhitunganBidangBangunan.findAll({
      attributes: [
        ProyekId,
        [sequelize.fn('sum', sequelize.col('hargatotal')), 'harga_total'],
      ],
      group: ['ProyekId'],
    })
    return res.status(200).json({
      message: "Success Read sum",
      perhitunganbidangsum
    })

  } catch (error) {
    console.log(err)
    throw err
  }
}

exports.viewBatako = async (req, res) => {
  try {
    const materials = await Material.findAll({
      where: { JenisId: 2 }
    })
    return res.status(200).json({
      message: "Success Read batako",
      materials
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}
exports.viewSemen = async (req, res) => {
  try {
    const materials = await Material.findAll(
      { where: { JenisId: 3 } }
    )
    return res.status(200).json({
      message: "Success Read Semen",
      materials
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}
exports.viewPasir = async (req, res) => {
  try {
    const materials = await Material.findAll(
      { where: { JenisId: 12 } }
    )
    return res.status(200).json({
      message: "Success Read Pasir",
      materials
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
    ProyekId,
    nama,
    jenis_pengerjaan,
    panjangbid,
    tinggibid,
    panjangpin,
    tinggipin,
    panjangjen,
    tinggijen,
    luas_bidang,
    nama_batako,
    nama_semen,
    naama_pasir,
    jumlahkeperluanbatako,
    jumlahkeperluanpasir,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargabatako,
    hargabatakototal,
    hargapasir,
    hargapasirtotal,
    hargasemen,
    hargasementotal,
    hargatotal
  } = req.body

  let errors = []


  // if (!luas_bidang) {
  //   errors.push({
  //     field: 'luas_bidang',
  //     message: 'luas_bidang is required',
  //   })
  // }

  // if (!jumlahkeperluanbatako) {
  //   errors.push({
  //     field: 'jumlahkeperluanbatako',
  //     message: 'jumlahkeperluanbatako is required',
  //   })
  // }
  // if (!jumlahkeperluanpasir) {
  //   errors.push({
  //     field: 'jumlahkeperluanpasir',
  //     message: 'jumlahkeperluanpasir is required',
  //   })
  // }
  // if (!jumlahkeperluansemen) {
  //   errors.push({
  //     field: 'jumlahkeperluansemen',
  //     message: 'jumlahkeperluansemen is required',
  //   })
  // }
  // if (!metode) {
  //   errors.push({
  //     field: 'metode',
  //     message: 'metode is required',
  //   })
  // }
  // if (!hargabatako) {
  //   errors.push({
  //     field: 'hargabatako',
  //     message: 'hargabatako is required',
  //   })
  // }
  // if (!hargapasir) {
  //   errors.push({
  //     field: 'hargapasir',
  //     message: 'hargapasir is required',
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
    panjangbid,
    tinggibid,
    panjangpin,
    tinggipin,
    panjangjen,
    tinggijen,
    luas_bidang,
    nama_batako,
    nama_semen,
    naama_pasir,
    jumlahkeperluanbatako,
    jumlahkeperluanpasir,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargabatako,
    hargabatakototal,
    hargapasir,
    hargapasirtotal,
    hargasemen,
    hargasementotal
  } = req.body

  var total = parseFloat(hargabatakototal) + parseFloat(hargapasirtotal) + parseFloat(hargasementotal)
  const hargatotal = total


  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganbidang = await PerhitunganBidangBangunan.create({
      ProyekId,
      nama,
      jenis_pengerjaan,
      panjangbid,
      tinggibid,
      panjangpin,
      tinggipin,
      panjangjen,
      tinggijen,
      luas_bidang,
      nama_batako,
      nama_semen,
      naama_pasir,
      jumlahkeperluanbatako,
      jumlahkeperluanpasir,
      Jumlahkeperluansemen,
      jumlahdalamsak,
      metode,
      hargabatako,
      hargabatakototal,
      hargapasir,
      hargapasirtotal,
      hargasemen,
      hargasementotal,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitungandinding",
      perhitunganbidang
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
      const perhitunganbidang = await PerhitunganBidangBangunan.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (perhitunganbidang === null || perhitunganbidang === "") {
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

exports.actionUpdate = async function (req, res) {
  const { id } = req.params
  let {
    nama,
    jenis_pengerjaan,
    panjangbid,
    tinggibid,
    panjangpin,
    tinggipin,
    panjangjen,
    tinggijen,
    luas_bidang,
    nama_batako,
    nama_semen,
    naama_pasir,
    jumlahkeperluanbatako,
    jumlahkeperluanpasir,
    Jumlahkeperluansemen,
    jumlahdalamsak,
    metode,
    hargabatako,
    hargabatakototal,
    hargapasir,
    hargapasirtotal,
    hargasemen,
    hargasementotal
  } = req.body
  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganbidang = await PerhitunganBidangBangunan.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganbidang) {
      perhitunganbidang.nama = nama
      perhitunganbidang.jenis_pengerjaan = jenis_pengerjaan
      perhitunganbidang.panjangbid = panjangbid
      perhitunganbidang.tinggibid = panjangjen
      perhitunganbidang.panjangpin = panjangpin
      perhitunganbidang.tinggipin = tinggipin
      perhitunganbidang.panjangjen = panjangjen
      perhitunganbidang.tinggijen = tinggijen
      perhitunganbidang.luas_bidang = luas_bidang
      perhitunganbidang.nama_batako = nama_batako
      perhitunganbidang.nama_semen = nama_semen
      perhitunganbidang.naama_pasir = naama_pasir
      perhitunganbidang.jumlahkeperluanbatako = jumlahkeperluanbatako
      perhitunganbidang.jumlahkeperluanpasir = jumlahkeperluanpasir
      perhitunganbidang.Jumlahkeperluansemen = Jumlahkeperluansemen
      perhitunganbidang.jumlahdalamsak = jumlahdalamsak
      perhitunganbidang.metode = metode
      perhitunganbidang.hargabatako = hargabatako
      perhitunganbidang.hargapasir = hargapasir
      perhitunganbidang.hargasemen = hargasemen
      perhitunganbidang.hargabatakototal = hargabatakototal
      perhitunganbidang.hargapasirtotal = hargapasirtotal
      perhitunganbidang.hargasementotal = hargasementotal
      perhitunganbidang.hargatotal = hargatotal

      await perhitunganbidang.save()
    }

    return res.status(201).json({
      message: "Success Update Perhitunganbidang",
      perhitunganbidang
    })
  } catch (err) {
    console.log(err)
  }
}

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