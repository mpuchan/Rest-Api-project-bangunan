const {
  PerhitunganBidangBangunan, PerhitunganAcian, Proyek
} = require("../models")
const excel = require('exceljs');

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

// exports.actionExportSingleData = async (req, res) => {
//   const { ProyekId } = req.params
//   try {
//     const perhitunganbidang = await PerhitunganBidangBangunan.findAll({
//       where: {
//         ProyekId: { [Op.eq]: ProyekId }
//       }
//     })
//     const perhitunganacian = await PerhitunganAcian.findAll({
//       where: {
//         ProyekId: { [Op.eq]: ProyekId }
//       }
//     })
//     const jsonperhitunganbidangbangunans = JSON.parse(JSON.stringify(perhitunganbidang));
//     const jsonperhitunganacians = JSON.parse(JSON.stringify(perhitunganacian));
//     console.log(jsonperhitunganbidangbangunans)
//     console.log(jsonperhitunganacians)
//     let workbook = new excel.Workbook(); //creating workbook
//     let worksheet = workbook.addWorksheet('PerhitunganPondasi'); //creating worksheet
//     let worksheet1 = workbook.addWorksheet('PerhitunganUrugan');
//     let worksheet2 = workbook.addWorksheet('PerhitunganBidang');
//     let worksheet3 = workbook.addWorksheet('PerhitunganBeton');
//     let worksheet4 = workbook.addWorksheet('PerhitunganAtap');
//     let worksheet5 = workbook.addWorksheet('PerhitunganPlesteran');
//     let worksheet6 = workbook.addWorksheet('PerhitunganAcian');
//     let worksheet7 = workbook.addWorksheet('PerhitunganPengecetan');
//     let worksheet8 = workbook.addWorksheet('PerhitunganLantai');
//     let worksheet9 = workbook.addWorksheet('PerhitunganPlafon');
//     let worksheet10 = workbook.addWorksheet('RekapitulasiKeseluruhan');
//     worksheet2.views = [
//       { state: 'frozen', ySplit: 1 }
//     ];
//     worksheet6.views = [
//       { state: 'frozen', ySplit: 1 }
//     ];
//     worksheet10.views = [
//       { state: 'frozen', ySplit: 1 }
//     ];

//     //  WorkSheet Header bidang
//     worksheet2.columns = [
//       { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
//       { header: 'Panjang', key: 'panjangbid', width: 30 },
//       { header: 'Tinggi', key: 'tinggibid', width: 30 },
//       { header: 'Panjang Pintu', key: 'panjangpin', width: 30 },
//       { header: 'Tinggi Pintu', key: 'tinggipin', width: 30 },
//       { header: 'Panjang Jendela', key: 'panjangjen', width: 30 },
//       { header: 'Tinggi Jendela', key: 'tinggijen', width: 30 },
//       { header: 'Luas Bidang', key: 'luas_bidang', width: 30 },
//       { header: 'Nama Batako', key: 'nama_batako', width: 30 },
//       { header: 'Harga Batako', key: 'hargabatako', width: 30 },
//       { header: 'Nama Semen ', key: 'nama_semen', width: 30 },
//       { header: 'Harga Semen', key: 'hargasemen', width: 30 },
//       { header: 'Nama Pasir', key: 'nama_pasir', width: 30 },
//       { header: 'Harga Pasir ', key: 'hargapasir', width: 30 },
//       { header: 'Koefisien Campuran', key: 'metode', width: 30 },
//       { header: 'Keperluan Batako', key: 'jumlahkeperluanbatako', width: 10 },
//       { header: 'Harga Batako Total', key: 'hargabatakototal', width: 12 },
//       { header: 'Keperluan Pasir', key: 'jumlahkeperluanpasir', width: 10 },
//       { header: 'Harga Pasir Total', key: 'hargapasirtotal', width: 12 },
//       { header: 'Keperluan Semen', key: 'Jumlahkeperluansemen', width: 10 },
//       { header: 'Keperluan Semen (/sak)', key: 'jumlahdalamsak', width: 8 },
//       { header: 'Harga Semen Total', key: 'hargasementotal', width: 12 },
//       { header: 'Harga Total', key: 'hargatotal', width: 12 }
//     ];
//     //  WorkSheet Header Acian
//     worksheet6.columns = [
//       { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
//       { header: 'Panjang', key: 'panjangdin', width: 30 },
//       { header: 'Tinggi', key: 'tinggidin', width: 30 },
//       { header: 'Sisi', key: 'sisi', width: 30 },
//       { header: 'Luas', key: 'luas', width: 30 },
//       { header: 'Campuran', key: 'metode', width: 30 },
//       { header: 'Nama Semen', key: 'nama_semen', width: 30 },
//       { header: 'Harga Semen', key: 'hargasemen', width: 30 },
//       { header: 'Jumlah Keperluan Semen', key: 'Jumlahkeperluansemen', width: 30 },
//       { header: 'Jumlah dalam Sak', key: 'jumlahdalamsak', width: 30 },
//       { header: 'Harga Total Semen', key: 'hargasementotal', width: 30 },
//       { header: 'Harga Total', key: 'hargatotal', width: 30 }

//     ];
//     //  WorkSheet Header Rekapitulasi
//     worksheet10.mergeCells('A1:E1');
//     worksheet10.getCell('A1').value = 'Rekapitulasi Data Keperluan Material';
//     worksheet10.getCell('A1').alignment = { horizontal: 'center' };

//     // worksheet10.columns = [
//     //   { header: 'No',key:'nama',width:30},
//     //   { header: 'Data Material', key: 'nama', width: 60 },
//     //   { header: 'Jumlah Harga', key: 'nama', width: 60 }
//     // ];
//     // Add Array Rows Bidang
//     worksheet2.addRows(jsonperhitunganbidangbangunans);
//     worksheet2.getRow(1).font = { bold: true }
//     const totalNumberOfRows = worksheet2.rowCount
//     worksheet2.addRows([''], [''])
//     // Add the total Rows Bidang
//     worksheet2.addRows(['Total'])
//     worksheet2.addRow([
//       'Luas Dinding Total',
//       {
//         formula: `=sum(H2:H${totalNumberOfRows})`
//       }
//     ])
//     worksheet2.addRow([
//       'Keperluan Batako Total',
//       {
//         formula: `=sum(P2:P${totalNumberOfRows})`
//       }, {
//         formula: `=sum(P2:P${totalNumberOfRows})`
//       }
//     ])
//     worksheet2.addRow([
//       'Keperluan Pasir Total',
//       {
//         formula: `=sum(R2:R${totalNumberOfRows})`
//       },
//       {
//         formula: `=sum(S2:S${totalNumberOfRows})`
//       }
//     ])
//     worksheet2.addRow([
//       'Keperluan Semen Total',
//       {
//         formula: `=sum(U2:U${totalNumberOfRows})`
//       },
//       {
//         formula: `=sum(V2:V${totalNumberOfRows})`
//       }
//     ])
//     worksheet2.addRow([
//       'Total Biaya Keseluruhan',
//       {

//       },
//       {
//         formula: `=sum(W2:W${totalNumberOfRows})`
//       }
//     ])
//     //Acians
//     worksheet6.addRows(jsonperhitunganacians);
//     worksheet6.getRow(1).font = { bold: true }
//     //Rekapitulasi
//     worksheet10.getRow(1).font = { bold: true }
//     const totalNumberOfRows2 = worksheet2.rowCount
//     const totalNumberOfRows6 = worksheet6.rowCount
//     worksheet10.getCell('A2').value = 'Nama Proyek : ';
//     worksheet10.mergeCells('B2:C2');
//     worksheet10.getCell('B2').value = ProyekId;
//     // Add the total Rows Rekapitulasi
//     worksheet10.addRow([
//       'Total Biaya',
//       {
//         formula: `=sum(PerhitunganBidang!W2:W${totalNumberOfRows2})+sum(PerhitunganAcian!L2:L${totalNumberOfRows6})`
//       }
//     ])

//     // const totalNumberOfRows1 = worksheet1.rowCount
//     // worksheet1.addRows([''], [''])
//     res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//     res.setHeader('Content-Disposition', 'attachment; filename=' + 'Perhitungan Bidang Bangunan.xlsx');

//     return workbook.xlsx.write(res)
//       .then(function () {
//         res.status(200).end();
//       });
//   } catch (err) {
//     console.log(err)
//     throw err
//   }
// }

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
    nama_pasir,
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
  if (!Jumlahkeperluansemen) {
    errors.push({
      field: 'Jumlahkeperluansemen',
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
    nama_pasir,
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
      nama_pasir,
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

exports.actionReadSingleperhitunganbidang = async (req, res) => {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  try {
    const perhitunganbidang = await PerhitunganBidangBangunan.findOne({
      ...include,
      where: { id: { [Op.eq]: id } }
    })

    return res.status(201).json({
      message: "Success Read Single Proyek",
      perhitunganbidang
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}
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
    nama_pasir,
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
  // let errors = await validate(req)
  // if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const perhitunganbidang = await PerhitunganBidangBangunan.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (perhitunganbidang) {
      perhitunganbidang.nama = nama
      perhitunganbidang.jenis_pengerjaan = jenis_pengerjaan
      perhitunganbidang.panjangbid = panjangbid
      perhitunganbidang.tinggibid = tinggibid
      perhitunganbidang.panjangpin = panjangpin
      perhitunganbidang.tinggipin = tinggipin
      perhitunganbidang.panjangjen = panjangjen
      perhitunganbidang.tinggijen = tinggijen
      perhitunganbidang.luas_bidang = luas_bidang
      perhitunganbidang.nama_batako = nama_batako
      perhitunganbidang.nama_semen = nama_semen
      perhitunganbidang.nama_pasir = nama_pasir
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