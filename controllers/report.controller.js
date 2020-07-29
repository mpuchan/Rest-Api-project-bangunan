const {
    PerhitunganBidangBangunan,
    PerhitunganAcian,
    Proyek,
    PerhitunganPlesteran,
    PerhitunganPengecatan,
    PerhitunganPondasi,
    PerhitunganUrugan,
    PerhitunganLantai,
    PerhitunganPlafon,
    PerhitunganBeton
    // PerhitunganAtap
} = require("../models")
const excel = require('exceljs');

const Op = require("sequelize").Op

/**
 * include relasi
 */
let include = {

}

exports.actionExportSingleData = async (req, res) => {
    const { ProyekId } = req.params
    // const id = ProyekId;
    try {
        const proyek = await Proyek.findOne({
            where: {
                id: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganpondasi = await PerhitunganPondasi.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganurugan = await PerhitunganUrugan.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganbeton = await PerhitunganBeton.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganplesteran = await PerhitunganPlesteran.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganlantai = await PerhitunganLantai.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganpengecatan = await PerhitunganPengecatan.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganplafon = await PerhitunganPlafon.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganbidang = await PerhitunganBidangBangunan.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        const perhitunganacian = await PerhitunganAcian.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        // const perhitunganatap = await PerhitunganAtap.findAll({
        //     where: {
        //         ProyekId: { [Op.eq]: ProyekId }
        //     }
        // })

        const nama_proyek = proyek.nama_proyek
        const lokasi = proyek.lokasi
        const luastanah = proyek.luas_tanah
        const luasbangunan = proyek.luas_bangunan
        const tanggal = proyek.tanggal

        const jsonperhitunganpondasis = JSON.parse(JSON.stringify(perhitunganpondasi));
        const jsonperhitunganurugans = JSON.parse(JSON.stringify(perhitunganurugan));
        const jsonperhitunganbetons = JSON.parse(JSON.stringify(perhitunganbeton));
        const jsonperhitunganplesterans = JSON.parse(JSON.stringify(perhitunganplesteran));
        const jsonperhitunganlantais = JSON.parse(JSON.stringify(perhitunganlantai));
        const jsonperhitunganpengecatans = JSON.parse(JSON.stringify(perhitunganpengecatan));
        const jsonperhitunganplafons = JSON.parse(JSON.stringify(perhitunganplafon));
        const jsonperhitunganbidangbangunans = JSON.parse(JSON.stringify(perhitunganbidang));
        const jsonperhitunganacians = JSON.parse(JSON.stringify(perhitunganacian));

        // const jsonperhitunganataps = JSON.parse(JSON.stringify(perhitunganatap));
        console.log(jsonperhitunganbidangbangunans)
        console.log(jsonperhitunganacians)
        let workbook = new excel.Workbook(); //creating workbook
        let worksheet = workbook.addWorksheet('PerhitunganPondasi'); //creating worksheet
        let worksheet1 = workbook.addWorksheet('PerhitunganUrugan');
        let worksheet2 = workbook.addWorksheet('PerhitunganBidang');
        let worksheet3 = workbook.addWorksheet('PerhitunganBeton');
        let worksheet4 = workbook.addWorksheet('PerhitunganAtap');
        let worksheet5 = workbook.addWorksheet('PerhitunganPlesteran');
        let worksheet6 = workbook.addWorksheet('PerhitunganAcian');
        let worksheet7 = workbook.addWorksheet('PerhitunganPengecetan');
        let worksheet8 = workbook.addWorksheet('PerhitunganLantai');
        let worksheet9 = workbook.addWorksheet('PerhitunganPlafon');
        let worksheet10 = workbook.addWorksheet('RekapitulasiKeseluruhan');
        worksheet.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet1.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet2.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet3.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet4.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet5.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet6.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet7.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet8.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet9.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet6.views = [
            { state: 'frozen', ySplit: 1 }
        ];
        worksheet10.views = [
            { state: 'frozen', ySplit: 7 }
        ];

        //  WorkSheet Header Pondasi
        worksheet.columns = [
            { header: 'Nama', key: 'nama', width: 30 },
            { header: 'a', key: 'a', width: 30 },
            { header: 'b', key: 'b', width: 30 },
            { header: 't', key: 't', width: 30 },
            { header: 'p', key: 'p', width: 30 },
            { header: 'luas', key: 'luas', width: 30 },
            { header: 'Campuran', key: 'metode', width: 30 },
            { header: 'Nama Semen', key: 'namasemen', width: 30 },
            { header: 'Harga Semen', key: 'hargasemen', width: 30 },
            { header: 'Nama Pasir', key: 'namapasir', width: 30 },
            { header: 'Harga Pasir', key: 'hargapasir', width: 30 },
            { header: 'Nama Batu', key: 'namabatu', width: 30 },
            { header: 'Harga Batu', key: 'hargabatukali', width: 30 },
            { header: 'Jumlah Keperluan Semen', key: 'jumlahsemen', width: 30 },
            { header: 'Jumlah dalam Sak', key: 'jumlahsemendalamsak', width: 30 },
            { header: 'Jumlah Keperluan Pasir', key: 'jumlahpasir', width: 30 },
            { header: 'Jumlah Batu', key: 'jumlahbatu', width: 30 },
            { header: 'Jumlah Keperluan Batu dalam truk', key: 'jumlahbatutruk', width: 30 },
            { header: 'Harga Total Semen', key: 'hargasementotal', width: 30 },
            { header: 'Harga Total Pasir', key: 'hargapasirtotal', width: 30 },
            { header: 'Harga Total Batu', key: 'hargabatutotal', width: 30 },
            { header: 'Harga Total', key: 'hargatotal', width: 30 }

        ];

        //  WorkSheet Header Urugan
        worksheet1.columns = [
            { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
            { header: 'Panjang', key: 'panjang', width: 30 },
            { header: 'Lebar', key: 'lebar', width: 30 },
            { header: 'Tinggi', key: 'tinggi', width: 30 },
            { header: 'Volume', key: 'volume', width: 30 },
            { header: 'Nama Pasir Urug', key: 'nama_pasir', width: 30 },
            { header: 'Harga Pasir Urugan', key: 'hargapasir', width: 30 },
            { header: 'Jumlah Keperluan Pasir Urug', key: 'Jumlahkeperluanpasir', width: 30 },
            { header: 'Jumla pasir dalam truck', key: 'jumlahdalamtruk', width: 30 },
            { header: 'Harga Total Pasir', key: 'hargapasirtotal', width: 30 },
            { header: 'Harga Total', key: 'hargatotal', width: 30 }
        ];

        //  WorkSheet Header bidang
        worksheet2.columns = [
            { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
            { header: 'Panjang', key: 'panjangbid', width: 30 },
            { header: 'Tinggi', key: 'tinggibid', width: 30 },
            { header: 'Panjang Pintu', key: 'panjangpin', width: 30 },
            { header: 'Tinggi Pintu', key: 'tinggipin', width: 30 },
            { header: 'Panjang Jendela', key: 'panjangjen', width: 30 },
            { header: 'Tinggi Jendela', key: 'tinggijen', width: 30 },
            { header: 'Luas Bidang', key: 'luas_bidang', width: 30 },
            { header: 'Nama Batako', key: 'nama_batako', width: 30 },
            { header: 'Harga Batako', key: 'hargabatako', width: 30 },
            { header: 'Nama Semen ', key: 'nama_semen', width: 30 },
            { header: 'Harga Semen', key: 'hargasemen', width: 30 },
            { header: 'Nama Pasir', key: 'nama_pasir', width: 30 },
            { header: 'Harga Pasir ', key: 'hargapasir', width: 30 },
            { header: 'Koefisien Campuran', key: 'metode', width: 30 },
            { header: 'Keperluan Batako', key: 'jumlahkeperluanbatako', width: 10 },
            { header: 'Harga Batako Total', key: 'hargabatakototal', width: 12 },
            { header: 'Keperluan Pasir', key: 'jumlahkeperluanpasir', width: 10 },
            { header: 'Harga Pasir Total', key: 'hargapasirtotal', width: 12 },
            { header: 'Keperluan Semen', key: 'Jumlahkeperluansemen', width: 10 },
            { header: 'Keperluan Semen (/sak)', key: 'jumlahdalamsak', width: 8 },
            { header: 'Harga Semen Total', key: 'hargasementotal', width: 12 },
            { header: 'Harga Total', key: 'hargatotal', width: 12 }
        ];

        //  WorkSheet Header beton
        worksheet3.columns = [
            { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
            { header: 'Panjang Beton', key: 'panjangbeton', width: 30 },
            { header: 'Pengerjaan Beton', key: 'pilihanbeton', width: 30 },
            { header: 'Nama Papan', key: 'namapapan', width: 30 },
            { header: 'Nama Paku', key: 'namapaku', width: 30 },
            { header: 'Nama Besi', key: 'namabesi', width: 30 },
            { header: 'Nama Besi untuk begel', key: 'namabegel', width: 30 },
            { header: 'Nama Kawat', key: 'namakawat', width: 30 },
            { header: 'Nama Pasir', key: 'namapasir', width: 30 },
            { header: 'Nama Semen', key: 'namasemen', width: 30 },
            { header: 'Nama Batu', key: 'namabatu', width: 30 },
            { header: 'Harga Papan', key: 'hargapapan', width: 30 },
            { header: 'Harga Paku', key: 'hargapaku', width: 30 },
            { header: 'Harga Besi', key: 'hargabesi', width: 30 },
            { header: 'Harga Besi untuk begel', key: 'hargabegel', width: 30 },
            { header: 'Harga Kawat', key: 'hargakawat', width: 30 },
            { header: 'Harga Pasir', key: 'hargapasir', width: 30 },
            { header: 'Harga Semen', key: 'hargasemen', width: 30 },
            { header: 'Harga Batu', key: 'hargabatu', width: 30 },
            { header: 'Jumlah Papan', key: 'jumlahpapan', width: 30 },
            { header: 'Jumlah Paku', key: 'jumlahpaku', width: 30 },
            { header: 'Jumlah Besi', key: 'jumlahbesi', width: 30 },
            { header: 'Jumlah Besi untuk begel', key: 'jumlahbegel', width: 30 },
            { header: 'Jumlah Kawat', key: 'jumlahkawat', width: 30 },
            { header: 'Jumlah Pasir', key: 'jumlahpasir', width: 30 },
            { header: 'Jumlah Semen', key: 'jumlahsemen', width: 30 },
            { header: 'Jumlah Batu', key: 'jumlahbatu', width: 30 },
        ];

        // //  WorkSheet Header Atap
        // worksheet4.columns = [
        //     { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
        //     { header: 'Panjang', key: 'panjangbid', width: 30 },
        //     { header: 'Tinggi', key: 'tinggibid', width: 30 },
        //     { header: 'Panjang Pintu', key: 'panjangpin', width: 30 },
        //     { header: 'Tinggi Pintu', key: 'tinggipin', width: 30 },
        //     { header: 'Panjang Jendela', key: 'panjangjen', width: 30 },
        //     { header: 'Tinggi Jendela', key: 'tinggijen', width: 30 },
        //     { header: 'Luas Bidang', key: 'luas_bidang', width: 30 },
        //     { header: 'Nama Batako', key: 'nama_batako', width: 30 },
        //     { header: 'Harga Batako', key: 'hargabatako', width: 30 },
        //     { header: 'Nama Semen ', key: 'nama_semen', width: 30 },
        //     { header: 'Harga Semen', key: 'hargasemen', width: 30 },
        //     { header: 'Nama Pasir', key: 'nama_pasir', width: 30 },
        //     { header: 'Harga Pasir ', key: 'hargapasir', width: 30 },
        //     { header: 'Koefisien Campuran', key: 'metode', width: 30 },
        //     { header: 'Keperluan Batako', key: 'jumlahkeperluanbatako', width: 10 },
        //     { header: 'Harga Batako Total', key: 'hargabatakototal', width: 12 },
        //     { header: 'Keperluan Pasir', key: 'jumlahkeperluanpasir', width: 10 },
        //     { header: 'Harga Pasir Total', key: 'hargapasirtotal', width: 12 },
        //     { header: 'Keperluan Semen', key: 'Jumlahkeperluansemen', width: 10 },
        //     { header: 'Keperluan Semen (/sak)', key: 'jumlahdalamsak', width: 8 },
        //     { header: 'Harga Semen Total', key: 'hargasementotal', width: 12 },
        //     { header: 'Harga Total', key: 'hargatotal', width: 12 }
        // ];

        //  WorkSheet Header Plesteran
        worksheet5.columns = [
            { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
            { header: 'Panjang', key: 'panjangdin', width: 30 },
            { header: 'Tinggi', key: 'tinggidin', width: 30 },
            { header: 'Sisi', key: 'tebal', width: 30 },
            { header: 'Sisi', key: 'sisi', width: 30 },
            { header: 'Luas', key: 'volume', width: 30 },
            { header: 'Campuran', key: 'metode', width: 30 },
            { header: 'Nama Semen', key: 'nama_semen', width: 30 },
            { header: 'Nama Pasir', key: 'nama_pasir', width: 30 },
            { header: 'Harga Semen', key: 'hargasemen', width: 30 },
            { header: 'Harga Pasir', key: 'hargapasir', width: 30 },
            { header: 'Jumlah Keperluan Semen', key: 'Jumlahkeperluansemen', width: 30 },
            { header: 'Jumlah Keperluan Semen Dalam Sak', key: 'jumlahdalamsak', width: 30 },
            { header: 'Jumlah Keperluan Pasir', key: 'jumlahkeperluanpasir', width: 30 },
            { header: 'Harga Pasir Total', key: 'hargapasirtotal', width: 30 },
            { header: 'Harga Semen Total', key: 'hargasementotal', width: 30 },
            { header: 'Harga Total', key: 'hargatotal', width: 30 }

        ];

        //  WorkSheet Header Acian
        worksheet6.columns = [
            { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
            { header: 'Panjang', key: 'panjangdin', width: 30 },
            { header: 'Tinggi', key: 'tinggidin', width: 30 },
            { header: 'Sisi', key: 'sisi', width: 30 },
            { header: 'Luas', key: 'luas', width: 30 },
            { header: 'Campuran', key: 'metode', width: 30 },
            { header: 'Nama Semen', key: 'nama_semen', width: 30 },
            { header: 'Harga Semen', key: 'hargasemen', width: 30 },
            { header: 'Jumlah Keperluan Semen', key: 'Jumlahkeperluansemen', width: 30 },
            { header: 'Jumlah dalam Sak', key: 'jumlahdalamsak', width: 30 },
            { header: 'Harga Total Semen', key: 'hargasementotal', width: 30 },
            { header: 'Harga Total', key: 'hargatotal', width: 30 }

        ];

        //  WorkSheet Header Pengecatan
        worksheet7.columns = [
            { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
            { header: 'Panjang', key: 'panjangdin', width: 30 },
            { header: 'Tinggi', key: 'tinggidin', width: 30 },
            { header: 'Sisi', key: 'sisi', width: 30 },
            { header: 'Luas', key: 'luas_pengecatan', width: 30 },
            { header: 'Nama Cat', key: 'nama_cat', width: 30 },
            { header: 'Nama Plamur', key: 'nama_plamur', width: 30 },
            { header: 'Harga Cat', key: 'hargacat', width: 30 },
            { header: 'Harga Plamur', key: 'hargaplamur', width: 30 },
            { header: 'Jumlah Keperluan Cat', key: 'jumlahkeperluancat', width: 30 },
            { header: 'Jumlah Keperluan Cat Kaleng', key: 'jumlahkeperluancatkaleng', width: 30 },
            { header: 'Jumlah Keperluan Plamur', key: 'jumlahkeperluanplamur', width: 30 },
            { header: 'Jumlah Keperluan Plamur Sak', key: 'jumlahkeperluanplamursak', width: 30 },
            { header: 'Harga Cat Total', key: 'hargacattotal', width: 30 },
            { header: 'Harga Plamur Total', key: 'hargaplamurtotal', width: 30 },
            { header: 'Harga Total', key: 'hargatotal', width: 30 }
        ];

        //  WorkSheet Header Lantai
        worksheet8.columns = [
            { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
            { header: 'Panjang', key: 'panjanglan', width: 30 },
            { header: 'Lebar', key: 'lebarlan', width: 30 },
            { header: 'Luas Lantai', key: 'luas_lantai', width: 30 },
            { header: 'Campuran', key: 'metode', width: 30 },
            { header: 'Nama Keramik', key: 'nama_keramik', width: 30 },
            { header: 'Nama Semen', key: 'nama_semen', width: 30 },
            { header: 'Nama Pasir', key: 'nama_pasir', width: 30 },
            { header: 'Nama Semennat', key: 'nama_semenat', width: 30 },
            { header: 'Harga Keramik', key: 'hargakeramik', width: 30 },
            { header: 'Harga Semen', key: 'hargasemen', width: 30 },
            { header: 'Harga Pasir', key: 'hargapasir', width: 30 },
            { header: 'Harga Semennat', key: 'harganat', width: 30 },
            { header: 'Jumlah Keramik(/buah)', key: 'jumlahkeperluankeramik', width: 30 },
            { header: 'Jumlah Keramik(/dus)', key: 'jumlahkeperluankeramikdus', width: 30 },
            { header: 'Jumlah Semen (/kg)', key: 'Jumlahkeperluansemen', width: 30 },
            { header: 'Jumlah Semen (/sak)', key: 'jumlahdalamsak', width: 30 },
            { header: 'Jumlah Pasir', key: 'jumlahkeperluanpasir', width: 30 },
            { header: 'Jumlah Semennat', key: 'jumlahkeperluannat', width: 30 },
            { header: 'Harga Keramik Total', key: 'hargakeramiktotal', width: 30 },
            { header: 'Harga Semen Total', key: 'hargasementotal', width: 30 },
            { header: 'Harga Pasir Total', key: 'hargapasirtotal', width: 30 },
            { header: 'Harga Semennat Total', key: 'harganattotal', width: 30 },
            { header: 'Harga Total', key: 'hargatotal', width: 30 }
        ];

        //  WorkSheet Header Plafon
        worksheet9.columns = [
            { header: 'Nama Pengerjaan', key: 'nama', width: 30 },
            { header: 'Panjang', key: 'panjang', width: 30 },
            { header: 'Lebar', key: 'lebar', width: 30 },
            { header: 'Luas', key: 'luas', width: 30 },
            { header: 'Nama Triplek', key: 'namatriplek', width: 30 },
            { header: 'Nama Paku', key: 'namapaku', width: 30 },
            { header: 'Nama Reng', key: 'namareng', width: 30 },
            { header: 'Harga Triplek', key: 'hargatriplek', width: 30 },
            { header: 'Harga Paku', key: 'hargapaku', width: 30 },
            { header: 'Harga Reng', key: 'hargareng', width: 30 },
            { header: 'Jumlah Triplek', key: 'jumlahtriplek', width: 30 },
            { header: 'Jumlah Triplek(/lembar)', key: 'jumlahtripleklembar', width: 30 },
            { header: 'Jumlah Paku(/kg)', key: 'jumlahpaku', width: 30 },
            { header: 'Jumlah Reng', key: 'jumlahreng', width: 30 },
            { header: 'Jumlah Reng (/batang)', key: 'jumlahrengbatang', width: 30 },
            { header: 'Harga Triplek Total', key: 'hargatotaltriplek', width: 30 },
            { header: 'Harga Paku Total', key: 'hargatotalpaku', width: 30 },
            { header: 'Harga Reng Total', key: 'hargatotalreng', width: 30 },
            { header: 'Harga Total', key: 'hargatotal', width: 30 }
        ];

        //  WorkSheet Header Rekapitulasi
        worksheet10.mergeCells('A1:F1');
        worksheet10.getCell('A1').value = 'Rekapitulasi Data Keperluan Material';
        worksheet10.getCell('A1').alignment = { horizontal: 'center' };

        // worksheet10.columns = [
        //   { header: 'No',key:'nama',width:30},
        //   { header: 'Data Material', key: 'nama', width: 60 },
        //   { header: 'Jumlah Harga', key: 'nama', width: 60 }
        // ];

        // Add Array Rows Pondasi
        worksheet.addRows(jsonperhitunganpondasis);
        worksheet.getRow(1).font = { bold: true }
        const totalNumberOfRows = worksheet1.rowCount

        // Add Array Rows urugans
        worksheet1.addRows(jsonperhitunganurugans);
        worksheet1.getRow(1).font = { bold: true }
        const totalNumberOfRows1 = worksheet1.rowCount

        // Add Array Rows Bidang
        worksheet2.addRows(jsonperhitunganbidangbangunans);
        worksheet2.getRow(1).font = { bold: true }
        const totalNumberOfRows2 = worksheet2.rowCount

        // Add Array Rows Beton
        worksheet3.addRows(jsonperhitunganbetons);
        worksheet3.getRow(1).font = { bold: true }
        const totalNumberOfRows3 = worksheet3.rowCount

        // // Add Array Rows Atap
        // worksheet4.addRows(jsonperhitunganatap);
        // worksheet4.getRow(1).font = { bold: true }
        // const totalNumberOfRows4 = worksheet4.rowCount

        // Add Array Rows Plesteran
        worksheet5.addRows(jsonperhitunganplesterans);
        worksheet5.getRow(1).font = { bold: true }
        const totalNumberOfRows5 = worksheet5.rowCount

        // Add Array Rows Acian
        worksheet6.addRows(jsonperhitunganacians);
        worksheet6.getRow(1).font = { bold: true }
        const totalNumberOfRows6 = worksheet6.rowCount

        // Add Array Rows Pengecatan
        worksheet7.addRows(jsonperhitunganpengecatans);
        worksheet7.getRow(1).font = { bold: true }
        const totalNumberOfRows7 = worksheet7.rowCount

        // Add Array Rows Lantai
        worksheet8.addRows(jsonperhitunganlantais);
        worksheet8.getRow(1).font = { bold: true }
        const totalNumberOfRows8 = worksheet8.rowCount

        // Add Array Rows Plafon
        worksheet9.addRows(jsonperhitunganplafons);
        worksheet9.getRow(1).font = { bold: true }
        const totalNumberOfRows9 = worksheet9.rowCount

        // worksheet2.addRows([''], [''])
        // // Add the total Rows Bidang
        // worksheet2.addRows(['Total'])
        // worksheet2.addRow([
        //     'Luas Dinding Total',
        //     {
        //         formula: `=sum(H2:H${totalNumberOfRows})`
        //     }
        // ])
        // worksheet2.addRow([
        //     'Keperluan Batako Total',
        //     {
        //         formula: `=sum(P2:P${totalNumberOfRows})`
        //     }, {
        //         formula: `=sum(P2:P${totalNumberOfRows})`
        //     }
        // ])
        // worksheet2.addRow([
        //     'Keperluan Pasir Total',
        //     {
        //         formula: `=sum(R2:R${totalNumberOfRows})`
        //     },
        //     {
        //         formula: `=sum(S2:S${totalNumberOfRows})`
        //     }
        // ])
        // worksheet2.addRow([
        //     'Keperluan Semen Total',
        //     {
        //         formula: `=sum(U2:U${totalNumberOfRows})`
        //     },
        //     {
        //         formula: `=sum(V2:V${totalNumberOfRows})`
        //     }
        // ])
        // worksheet2.addRow([
        //     'Total Biaya Keseluruhan',
        //     {

        //     },
        //     {
        //         formula: `=sum(W2:W${totalNumberOfRows})`
        //     }
        // ])
        //Rekapitulasi
        worksheet10.getRow(1).font = { bold: true }
        // worksheet10.addRows(jsonproyeks);
        worksheet10.mergeCells('A2:B2');
        worksheet10.getCell('A2').value = 'Nama Proyek :';
        worksheet10.mergeCells('C2:F2');
        worksheet10.getCell('C2').value = nama_proyek;
        worksheet10.mergeCells('A3:B3');
        worksheet10.getCell('A3').value = 'Luas Tanah :';
        worksheet10.mergeCells('C3:F3');
        worksheet10.getCell('C3').value = luastanah + 'm2';
        worksheet10.mergeCells('A4:B4');
        worksheet10.getCell('A4').value = 'Luas Bangunan :';
        worksheet10.mergeCells('C4:F4');
        worksheet10.getCell('C4').value = luasbangunan + 'm2';
        worksheet10.mergeCells('A5:B5');
        worksheet10.getCell('A5').value = 'Lokasi :';
        worksheet10.mergeCells('C5:F5');
        worksheet10.getCell('C5').value = lokasi;
        worksheet10.mergeCells('A6:B6');
        worksheet10.getCell('A6').value = 'Tanggal Proyek :';
        worksheet10.mergeCells('C6:F6');
        worksheet10.getCell('C6').value = tanggal;
        // Add the total Rows Rekapitulasi
        //Pondasi
        worksheet10.getCell('A7').value = 'No';
        worksheet10.mergeCells('B7:F7');
        worksheet10.getCell('B7').value = 'Jenis Pengerjaan & Keperluan Material';
        worksheet10.getCell('B7').alignment = { horizontal: 'center' };
        worksheet10.getCell('A8').value = '1';
        worksheet10.mergeCells('B8:C8');
        worksheet10.getCell('B8').value = 'Perhitungan Pondasi';
        worksheet10.mergeCells('B9:C9');
        worksheet10.getCell('B9').value = 'Batu';
        worksheet10.mergeCells('B10:C10');
        worksheet10.getCell('B10').value = 'Semen';
        worksheet10.mergeCells('B11:C11');
        worksheet10.getCell('B11').value = 'Pasir';

        worksheet10.getCell('D8').value = 'Jumlah';
        worksheet10.getCell('D9').value = {
            formula: `=sum(PerhitunganPondasi!Q2:Q${totalNumberOfRows})`
        };
        worksheet10.getCell('D10').value = {
            formula: `=sum(PerhitunganPondasi!O2:O${totalNumberOfRows})`
        };
        worksheet10.getCell('D11').value = {
            formula: `=sum(PerhitunganPondasi!P2:P${totalNumberOfRows})`
        };
        worksheet10.mergeCells('E8:F8');
        worksheet10.getCell('E8').value = 'Biaya';
        worksheet10.mergeCells('E9:F9');
        worksheet10.getCell('E9').value = {
            formula: `=sum(PerhitunganPondasi!U2:U${totalNumberOfRows})`
        };
        worksheet10.getCell('E9').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E10:F10');
        worksheet10.getCell('E10').value = {
            formula: `=sum(PerhitunganPondasi!S2:S${totalNumberOfRows})`
        };
        worksheet10.getCell('E10').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E11:F11');
        worksheet10.getCell('E11').value = {
            formula: `=sum(PerhitunganPondasi!T2:T${totalNumberOfRows})`
        };
        worksheet10.getCell('E11').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        //Urugan
        worksheet10.getCell('A12').value = '2';
        worksheet10.mergeCells('B12:C12');
        worksheet10.getCell('B12').value = 'Perhitungan Urugan';
        worksheet10.mergeCells('B13:C13');
        worksheet10.getCell('B13').value = 'Material Urug';
        worksheet10.getCell('D12').value = 'Jumlah';
        worksheet10.getCell('D13').value = {
            formula: `=sum(PerhitunganUrugan!H2:H${totalNumberOfRows1})`
        };
        worksheet10.mergeCells('E12:F12');
        worksheet10.getCell('E12').value = 'Biaya';
        worksheet10.mergeCells('E13:F13');
        worksheet10.getCell('E13').value = {
            formula: `=sum(PerhitunganUrugan!J2:J${totalNumberOfRows1})`
        };
        worksheet10.getCell('E13').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        //Bidang
        worksheet10.getCell('A14').value = '3';
        worksheet10.mergeCells('B14:C14');
        worksheet10.getCell('B14').value = 'Perhitungan Bidang';
        worksheet10.mergeCells('B15:C15');
        worksheet10.getCell('B15').value = 'Batako';
        worksheet10.mergeCells('B16:C16');
        worksheet10.getCell('B16').value = 'Semen';
        worksheet10.mergeCells('B17:C17');
        worksheet10.getCell('B17').value = 'Pasir';

        worksheet10.getCell('D14').value = 'Jumlah';
        worksheet10.getCell('D15').value = {
            formula: `=sum(PerhitunganBidang!P2:P${totalNumberOfRows2})`
        };
        worksheet10.getCell('D16').value = {
            formula: `=sum(PerhitunganBidang!U2:U${totalNumberOfRows2})`
        };
        worksheet10.getCell('D17').value = {
            formula: `=sum(PerhitunganBidang!R2:R${totalNumberOfRows2})`
        };
        worksheet10.mergeCells('E14:F14');
        worksheet10.getCell('E14').value = 'Biaya';
        worksheet10.mergeCells('E15:F15');
        worksheet10.getCell('E15').value = {
            formula: `=sum(PerhitunganBidang!Q2:Q${totalNumberOfRows2})`
        };
        worksheet10.getCell('E15').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E16:F16');
        worksheet10.getCell('E16').value = {
            formula: `=sum(PerhitunganBidang!V2:V${totalNumberOfRows2})`
        };
        worksheet10.getCell('E16').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E17:F17');
        worksheet10.getCell('E17').value = {
            formula: `=sum(PerhitunganBidang!S2:S${totalNumberOfRows2})`
        };
        worksheet10.getCell('E17').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';


        //Beton
        worksheet10.getCell('A18').value = '4';
        worksheet10.mergeCells('B18:C18');
        worksheet10.getCell('B18').value = 'Perhitungan Beton';
        worksheet10.mergeCells('B19:C19');
        worksheet10.getCell('B19').value = 'Papan';
        worksheet10.mergeCells('B20:C20');
        worksheet10.getCell('B20').value = 'Paku';
        worksheet10.mergeCells('B21:C21');
        worksheet10.getCell('B21').value = 'Besi';
        worksheet10.mergeCells('B22:C22');
        worksheet10.getCell('B22').value = 'Besi begel';
        worksheet10.mergeCells('B23:C23');
        worksheet10.getCell('B23').value = 'Kawat';
        worksheet10.mergeCells('B24:C24');
        worksheet10.getCell('B24').value = 'Pasir';
        worksheet10.mergeCells('B25:C25');
        worksheet10.getCell('B25').value = 'Semen';
        worksheet10.mergeCells('B26:C26');
        worksheet10.getCell('B26').value = 'Batu';

        worksheet10.getCell('D18').value = 'Jumlah';
        worksheet10.getCell('D19').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D20').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D21').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D22').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D23').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D24').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D25').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D26').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };

        worksheet10.mergeCells('E18:F18');
        worksheet10.getCell('E18').value = 'Biaya';
        worksheet10.mergeCells('E19:F19');
        worksheet10.getCell('E19').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E19').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E20:F20');
        worksheet10.getCell('E20').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E20').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E21:F21');
        worksheet10.getCell('E21').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E21').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E22:F22');
        worksheet10.getCell('E22').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E22').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E23:F23');
        worksheet10.getCell('E23').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E23').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E24:F24');
        worksheet10.getCell('E24').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E24').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E25:F25');
        worksheet10.getCell('E25').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E25').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E26:F26');
        worksheet10.getCell('E26').value = {
            formula: `=sum(PerhitunganBeton!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E26').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        //Genteng
        worksheet10.getCell('A27').value = '5';
        worksheet10.mergeCells('B27:C27');
        worksheet10.getCell('B27').value = 'Perhitungan Atap';
        worksheet10.mergeCells('B28:C28');
        worksheet10.getCell('B28').value = 'Genteng';
        worksheet10.mergeCells('B29:C29');
        worksheet10.getCell('B29').value = 'Reng';
        worksheet10.mergeCells('B30:C30');
        worksheet10.getCell('B30').value = 'Balok/canal';
        worksheet10.mergeCells('B31:C31');
        worksheet10.getCell('B31').value = 'Paku/Mur';
        worksheet10.mergeCells('B32:C32');
        worksheet10.getCell('B32').value = 'Kerpus/Bubugan';
        worksheet10.mergeCells('B33:C33');
        worksheet10.getCell('B33').value = 'Pasir';
        worksheet10.mergeCells('B34:C34');
        worksheet10.getCell('B34').value = 'Semen';

        worksheet10.getCell('D27').value = 'Jumlah';
        worksheet10.getCell('D28').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D29').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D30').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D31').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D32').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D33').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('D34').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };

        worksheet10.mergeCells('E27:F27');
        worksheet10.getCell('E27').value = 'Biaya';
        worksheet10.mergeCells('E28:F28');
        worksheet10.getCell('E28').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E28').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E29:F29');
        worksheet10.getCell('E29').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E29').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E30:F30');
        worksheet10.getCell('E30').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E30').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E31:F31');
        worksheet10.getCell('E31').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E31').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E32:F32');
        worksheet10.getCell('E32').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E32').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E33:F33');
        worksheet10.getCell('E33').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E33').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';
        worksheet10.mergeCells('E34:F34');
        worksheet10.getCell('E34').value = {
            formula: `=sum(PerhitunganAtap!W2:W${totalNumberOfRows2})`
        };
        worksheet10.getCell('E34').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';


        //Plesteran
        worksheet10.getCell('A35').value = '6';
        worksheet10.mergeCells('B35:C35');
        worksheet10.getCell('B35').value = 'Perhitungan Plesteran';
        worksheet10.mergeCells('B36:C36');
        worksheet10.getCell('B36').value = 'Pasir';
        worksheet10.mergeCells('B37:C37');
        worksheet10.getCell('B37').value = 'Semen';

        worksheet10.getCell('D35').value = 'Jumlah';
        worksheet10.getCell('D36').value = {
            formula: `=sum(PerhitunganPlesteran!N2:N${totalNumberOfRows5})`
        };
        worksheet10.getCell('D37').value = {
            formula: `=sum(PerhitunganPlesteran!M2:M${totalNumberOfRows5})`
        };
        worksheet10.mergeCells('E35:F35');
        worksheet10.getCell('E35').value = 'Biaya';
        worksheet10.mergeCells('E36:F36');
        worksheet10.getCell('E36').value = {
            formula: `=sum(PerhitunganPlesteran!O2:O${totalNumberOfRows5})`
        };
        worksheet10.getCell('E36').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        worksheet10.mergeCells('E37:F37');
        worksheet10.getCell('E37').value = {
            formula: `=sum(PerhitunganPlesteran!P2:P${totalNumberOfRows5})`
        };
        worksheet10.getCell('E37').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        //Acian
        worksheet10.getCell('A38').value = '7';
        worksheet10.mergeCells('B38:C38');
        worksheet10.getCell('B38').value = 'Perhitungan Acian';
        worksheet10.mergeCells('B39:C39');
        worksheet10.getCell('B39').value = 'Semen';
        worksheet10.getCell('D38').value = 'Jumlah';
        worksheet10.getCell('D39').value = {
            formula: `=sum(PerhitunganAcian!J2:J${totalNumberOfRows6})`
        };
        worksheet10.mergeCells('E38:F38');
        worksheet10.getCell('E38').value = 'Biaya';
        worksheet10.mergeCells('E39:F39');
        worksheet10.getCell('E39').value = {
            formula: `=sum(PerhitunganAcian!K2:K${totalNumberOfRows6})`
        };
        worksheet10.getCell('E39').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        //Pengecatan
        worksheet10.getCell('A40').value = '8';
        worksheet10.mergeCells('B40:C40');
        worksheet10.getCell('B40').value = 'Perhitungan Pengecatan';
        worksheet10.mergeCells('B41:C41');
        worksheet10.getCell('B41').value = 'Cat';
        worksheet10.mergeCells('B42:C42');
        worksheet10.getCell('B42').value = 'Plamur';

        worksheet10.getCell('D40').value = 'Jumlah';
        worksheet10.getCell('D41').value = {
            formula: `=sum(PerhitunganPengecatan!K2:K${totalNumberOfRows7})`
        };
        worksheet10.getCell('D42').value = {
            formula: `=sum(PerhitunganPengecatan!M2:M${totalNumberOfRows7})`
        };
        worksheet10.mergeCells('E40:F40');
        worksheet10.getCell('E40').value = 'Biaya';
        worksheet10.mergeCells('E41:F41');
        worksheet10.getCell('E41').value = {
            formula: `=sum(PerhitunganPengecatan!N2:N${totalNumberOfRows7})`
        };
        worksheet10.getCell('E41').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        worksheet10.mergeCells('E42:F42');
        worksheet10.getCell('E42').value = {
            formula: `=sum(PerhitunganPengecatan!O2:O${totalNumberOfRows7})`
        };
        worksheet10.getCell('E42').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';


        //Lantai
        worksheet10.getCell('A43').value = '9';
        worksheet10.mergeCells('B43:C43');
        worksheet10.getCell('B43').value = 'Perhitungan Lantai';
        worksheet10.mergeCells('B44:C44');
        worksheet10.getCell('B44').value = 'Keramik';
        worksheet10.mergeCells('B45:C45');
        worksheet10.getCell('B45').value = 'Semen';
        worksheet10.mergeCells('B46:C46');
        worksheet10.getCell('B46').value = 'Semen-Nat';
        worksheet10.mergeCells('B47:C47');
        worksheet10.getCell('B47').value = 'Pasir';


        worksheet10.getCell('D43').value = 'Jumlah';
        worksheet10.getCell('D44').value = {
            formula: `=sum(PerhitunganLantai!O2:O${totalNumberOfRows8})`
        };
        worksheet10.getCell('D45').value = {
            formula: `=sum(PerhitunganLantai!Q2:Q${totalNumberOfRows8})`
        };
        worksheet10.getCell('D46').value = {
            formula: `=sum(PerhitunganLantai!S2:S${totalNumberOfRows8})`
        };
        worksheet10.getCell('D47').value = {
            formula: `=sum(PerhitunganLantai!R2:R${totalNumberOfRows8})`
        };
        worksheet10.mergeCells('E43:F43');
        worksheet10.getCell('E43').value = 'Biaya';
        worksheet10.mergeCells('E44:F44');
        worksheet10.getCell('E44').value = {
            formula: `=sum(PerhitunganLantai!T2:T${totalNumberOfRows8})`
        };
        worksheet10.getCell('E44').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        worksheet10.mergeCells('E45:F45');
        worksheet10.getCell('E45').value = {
            formula: `=sum(PerhitunganLantai!U2:U${totalNumberOfRows8})`
        };
        worksheet10.getCell('E45').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        worksheet10.mergeCells('E46:F46');
        worksheet10.getCell('E46').value = {
            formula: `=sum(PerhitunganLantai!W2:W${totalNumberOfRows8})`
        };
        worksheet10.getCell('E46').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        worksheet10.mergeCells('E47:F47');
        worksheet10.getCell('E47').value = {
            formula: `=sum(PerhitunganLantai!V2:V${totalNumberOfRows8})`
        };
        worksheet10.getCell('E47').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        //Plafon
        worksheet10.getCell('A48').value = '10';
        worksheet10.mergeCells('B48:C48');
        worksheet10.getCell('B48').value = 'Perhitungan Plafon';
        worksheet10.mergeCells('B49:C49');
        worksheet10.getCell('B49').value = 'Triplek/Gypsum/Calsiboard';
        worksheet10.mergeCells('B50:C50');
        worksheet10.getCell('B50').value = 'Paku/mur';
        worksheet10.mergeCells('B51:C51');
        worksheet10.getCell('B51').value = 'Reng/hollow';

        worksheet10.getCell('D48').value = 'Jumlah';
        worksheet10.getCell('D49').value = {
            formula: `=sum(PerhitunganPlafon!L2:L${totalNumberOfRows9})`
        };
        worksheet10.getCell('D50').value = {
            formula: `=sum(PerhitunganPlafon!M2:M${totalNumberOfRows9})`
        };
        worksheet10.getCell('D51').value = {
            formula: `=sum(PerhitunganPlafon!O2:O${totalNumberOfRows9})`
        };
        worksheet10.mergeCells('E48:F48');
        worksheet10.getCell('E48').value = 'Biaya';
        worksheet10.mergeCells('E49:F49');
        worksheet10.getCell('E49').value = {
            formula: `=sum(PerhitunganPlafon!P2:P${totalNumberOfRows2})`
        };
        worksheet10.getCell('E49').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        worksheet10.mergeCells('E50:F50');
        worksheet10.getCell('E50').value = {
            formula: `=sum(PerhitunganPlafon!Q2:Q${totalNumberOfRows2})`
        };
        worksheet10.getCell('E50').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        worksheet10.mergeCells('E51:F51');
        worksheet10.getCell('E51').value = {
            formula: `=sum(PerhitunganPlafon!R2:R${totalNumberOfRows2})`
        };
        worksheet10.getCell('E51').numFmt = 'Rp#,###.##00;[Red]-Rp#,###.##00';

        // formula: `=sum(PerhitunganBidang!W2:W${totalNumberOfRows2})+sum(PerhitunganAcian!L2:L${totalNumberOfRows6})`

        // const totalNumberOfRows1 = worksheet1.rowCount
        // worksheet1.addRows([''], [''])
        worksheet10.getCell('E52').value = [
            { state: 'frozen', ySplit: 3 }
        ];
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=' + 'Perhitungan Bangunan.xlsx');

        return workbook.xlsx.write(res)
            .then(function () {
                res.status(200).end();
            });
    } catch (err) {
        console.log(err)
        throw err
    }
}