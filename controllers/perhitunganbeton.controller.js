const {
  PerhitunganBeton
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
  const { ProyekId } = req.params
  let errors = []
  if (ProyekId) {
    try {
      const perhitunganbeton = await PerhitunganBeton.findOne({
        where: {
          ProyekId: { [Op.eq]: ProyekId },
        }
      })
      if (perhitunganbeton === null || perhitunganbeton === "") {
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
    const perhitunganbeton = await PerhitunganBeton.findAll({
      where: {
        ProyekId: { [Op.eq]: ProyekId }
      }
    })
    return res.status(200).json({
      message: "Success Read Perhitungan",
      perhitunganbeton
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
    panjangbeton,
    pilihanbeton,
    namapapan,
    namapaku,
    namakawat,
    namabesi,
    namabegel,
    namasemen,
    namapasir,
    namabatu,
    hargasemen,
    hargapasir,
    hargakawat,
    hargabegel,
    hargapapan,
    hargapaku,
    hargabatu,
    hargabesi,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpapan,
    jumlahpaku,
    jumlahbesi,
    jumlahbesibatang,
    jumlahbegel,
    jumlahkawat,
    jumlahpasir,
    jumlahpasirdalamtruk,
    jumlahbatu,
    jumlahbatutruk,
    hargatotalpapan,
    hargatotalpaku,
    hargatotalbesi,
    hargatotalbegel,
    hargatotalkawat,
    hargatotalsemen,
    hargatotalpasir,
    hargatotalbatu,
    hargatotal
  } = req.body

  let errors = []


  // if (!KeramikId) {
  //   errors.push({
  //     field: 'KeramikId',
  //     message: 'KeramikId is required',
  //   })
  // }
  // if (!SemenId) {
  //   errors.push({
  //     field: 'SemenId',
  //     message: 'SemenId is required',
  //   })
  // }
  // if (!PasirId) {
  //   errors.push({
  //     field: 'PasirId',
  //     message: 'PasirId is required',
  //   })
  // }
  // if (!SemeNatId) {
  //   errors.push({
  //     field: 'SemeNatId',
  //     message: 'SemeNatId is required',
  //   })
  // }
  // if (!luas_lantai) {
  //   errors.push({
  //     field: 'luas_lantai',
  //     message: 'luas_lantai is required',
  //   })
  // }

  // if (!jumlahkeperluankeramik) {
  //   errors.push({
  //     field: 'jumlahkeperluankeramik',
  //     message: 'jumlahkeperluankeramik is required',
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
  // if (!jumlahkeperluannat) {
  //   errors.push({
  //     field: 'jumlahkeperluannat',
  //     message: 'jumlahkeperluannat is required',
  //   })
  // }
  // if (!metode) {
  //   errors.push({
  //     field: 'metode',
  //     message: 'metode is required',
  //   })
  // }
  // if (!hargakeramik) {
  //   errors.push({
  //     field: 'hargakeramik',
  //     message: 'hargakeramik is required',
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
  // if (!harganat) {
  //   errors.push({
  //     field: 'harganat',
  //     message: 'harganat is required',
  //   })
  // }


  return errors
}

exports.actionCreate = async (req, res) => {

  let {
    ProyekId,
    nama,
    panjangbeton,
    pilihanbeton,
    namapapan,
    namapaku,
    namakawat,
    namabesi,
    namabegel,
    namasemen,
    namapasir,
    namabatu,
    hargasemen,
    hargapasir,
    hargakawat,
    hargabegel,
    hargapapan,
    hargapaku,
    hargabatu,
    hargabesi,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpapan,
    jumlahpaku,
    jumlahbesi,
    jumlahbesibatang,
    jumlahbegel,
    jumlahkawat,
    jumlahpasir,
    jumlahpasirtruk,
    jumlahbatu,
    jumlahbatudalamtruk,
    hargatotalpapan,
    hargatotalpaku,
    hargatotalbesi,
    hargatotalbegel,
    hargatotalkawat,
    hargatotalsemen,
    hargatotalpasir,
    hargatotalbatu,
    hargatotal
  } = req.body

  // var total = parseFloat(hargabatutotal) + parseFloat(hargapasirtotal) + parseFloat(hargasementotal)
  // const hargatotal = total


  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const perhitunganbeton = await PerhitunganBeton.create({
      ProyekId,
      nama,
      panjangbeton,
      pilihanbeton,
      namapapan,
      namapaku,
      namakawat,
      namabesi,
      namabegel,
      namasemen,
      namapasir,
      namabatu,
      hargasemen,
      hargapasir,
      hargakawat,
      hargabegel,
      hargapapan,
      hargapaku,
      hargabatu,
      hargabesi,
      jumlahsemen,
      jumlahsemendalamsak,
      jumlahpapan,
      jumlahpaku,
      jumlahbesi,
      jumlahbesibatang,
      jumlahbegel,
      jumlahkawat,
      jumlahpasir,
      jumlahpasirtruk,
      jumlahbatu,
      jumlahbatudalamtruk,
      hargatotalpapan,
      hargatotalpaku,
      hargatotalbesi,
      hargatotalbegel,
      hargatotalkawat,
      hargatotalsemen,
      hargatotalpasir,
      hargatotalbatu,
      hargatotal
    })

    return res.status(200).json({
      message: "Success Create perhitunganbeton",
      perhitunganbeton
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
      const perhitunganbeton = await PerhitunganBeton.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (perhitunganbeton === null || perhitunganbeton === "") {
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
    panjangbeton,
    pilihanbeton,
    namapapan,
    namapaku,
    namakawat,
    namabesi,
    namabegel,
    namasemen,
    namapasir,
    namabatu,
    hargasemen,
    hargapasir,
    hargakawat,
    hargabegel,
    hargapapan,
    hargapaku,
    hargabatu,
    hargabesi,
    jumlahsemen,
    jumlahsemendalamsak,
    jumlahpapan,
    jumlahpaku,
    jumlahbesi,
    jumlahbesibatang,
    jumlahbegel,
    jumlahkawat,
    jumlahpasir,
    jumlahpasirdalamtruk,
    jumlahbatu,
    jumlahbatudalamtruk,
    hargatotalpapan,
    hargatotalpaku,
    hargatotalbesi,
    hargatotalbegel,
    hargatotalkawat,
    hargatotalsemen,
    hargatotalpasir,
    hargatotalbatu,
    hargatotal
  } = req.body
  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganbeton = await PerhitunganBeton.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganbeton) {
      perhitunganbeton.nama = nama
      perhitunganbeton.panjangbeton = panjangbeton
      perhitunganbeton.pilihanbeton = pilihanbeton
      perhitunganbeton.namapapan = namapapan
      perhitunganbeton.namapaku = namapaku
      perhitunganbeton.namakawat = namakawat
      perhitunganbeton.namabesi = namabesi
      perhitunganbeton.namasemen = namasemen
      perhitunganbeton.namapasir = namapasir
      perhitunganbeton.namabatu = namabatu
      perhitunganbeton.namabegel = namabegel
      perhitunganbeton.hargapapan = hargapapan
      perhitunganbeton.hargapaku = hargapaku
      perhitunganbeton.hargakawat = hargakawat
      perhitunganbeton.hargabesi = hargabesi
      perhitunganbeton.hargasemen = hargasemen
      perhitunganbeton.hargapasir = hargapasir
      perhitunganbeton.hargabatu = hargabatu
      perhitunganbeton.hargabegel = hargabegel
      perhitunganbeton.jumlahpapan = jumlahpapan
      perhitunganbeton.jumlahpaku = jumlahpaku
      perhitunganbeton.jumlahkawat = jumlahkawat
      perhitunganbeton.jumlahbesi = jumlahbesi
      perhitunganbeton.jumlahsemen = jumlahsemen
      perhitunganbeton.jumlahpasir = jumlahpasir
      perhitunganbeton.jumlahbatu = jumlahbatu
      perhitunganbeton.jumlahbegel = jumlahbegel
      perhitunganbeton.hargatotalpapan = hargatotalpapan
      perhitunganbeton.hargatotalpaku = hargatotalpaku
      perhitunganbeton.hargatotalkawat = hargatotalkawat
      perhitunganbeton.hargatotalbesi = hargatotalbesi
      perhitunganbeton.hargatotalsemen = hargatotalsemen
      perhitunganbeton.hargatotalpasir = hargatotalpasir
      perhitunganbeton.hargatotalbatu = hargatotalbatu
      perhitunganbeton.hargatotalbegel = hargatotalbegel
      perhitunganbeton.hargatotal = hargatotal
      perhitunganbeton.jumlahsemendalamsak = jumlahsemendalamsak
      perhitunganbeton.jumlahpasirdalamtruk = jumlahpasirdalamtruk
      perhitunganbeton.jumlahbatudalamtruk = jumlahbatudalamtruk

      await perhitunganbeton.save()
    }

    return res.status(201).json({
      message: "Success Update perhitunganbeton",
      perhitunganbeton
    })
  } catch (err) {
    console.log(err)
  }
}
exports.actionDelete = async function (req, res) {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  PerhitunganBeton.findOne({ where: { id: { [Op.eq]: id } } })
    .then((PerhitunganBeton) => {
      return PerhitunganBeton.destroy()
    })
    .then((PerhitunganBeton) => {
      res.status(200).json({ message: "Success Delete", PerhitunganBeton })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" })
    })

}