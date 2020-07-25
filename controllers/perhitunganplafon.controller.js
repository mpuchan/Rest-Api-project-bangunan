const {
    PerhitunganPlafon
} = require("../models")
const Op = require("sequelize").Op

async function validateId(req) {
    const { ProyekId } = req.params
    let errors = []
    if (ProyekId) {
        try {
            const perhitunganplafon = await PerhitunganPlafon.findOne({
                where: {
                    ProyekId: { [Op.eq]: ProyekId },
                }
            })
            if (perhitunganplafon === null || perhitunganplafon === "") {
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
        const perhitunganplafon = await PerhitunganPlafon.findAll({
            where: {
                ProyekId: { [Op.eq]: ProyekId }
            }
        })
        return res.status(200).json({
            message: "Success Read Perhitungan",
            perhitunganplafon
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
        panjang,
        lebar,
        luas,
        namatriplek,
        namapaku,
        namareng,
        hargatriplek,
        hargapaku,
        hargareng,
        jumlahtriplek,
        jumlahtripleklembar,
        jumlahreng,
        jumlahrengbatang,
        hargatotaltriplek,
        hargatotalpaku,
        hargatotalreng,
        hargatotal
    } = req.body

    let errors = []

    // if (!luas) {
    //     errors.push({
    //         field: 'luas_pengecatan',
    //         message: 'luas_pengecatan is required',
    //     })
    // }

    // if (!hargacat) {
    //     errors.push({
    //         field: 'hargacat',
    //         message: 'hargacat is required',
    //     })
    // }

    return errors
}

exports.actionCreate = async (req, res) => {

    let {
        ProyekId,
        nama,
        panjang,
        lebar,
        luas,
        namatriplek,
        namapaku,
        namareng,
        hargatriplek,
        hargapaku,
        hargareng,
        jumlahtriplek,
        jumlahtripleklembar,
        jumlahreng,
        jumlahrengbatang,
        hargatotaltriplek,
        hargatotalpaku,
        hargatotalreng
    } = req.body
    var total = parseFloat(hargatotaltriplek) + parseFloat(hargatotalpaku) + parseFloat(hargatotalreng)
    const hargatotal = total

    let errors = await validate(req)
    if (errors.length > 0) return res.status(422).json({ errors })

    try {
        const perhitunganplafon = await PerhitunganPlafon.create({
            ProyekId,
            nama,
            panjang,
            lebar,
            luas,
            namatriplek,
            namapaku,
            namareng,
            hargatriplek,
            hargapaku,
            hargareng,
            jumlahtriplek,
            jumlahtripleklembar,
            jumlahreng,
            jumlahrengbatang,
            hargatotaltriplek,
            hargatotalpaku,
            hargatotalreng,
            hargatotal
        })

        return res.status(200).json({
            message: "Success Create perhitunganplafond",
            perhitunganplafon
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
            const perhitunganplafon = await PerhitunganPlafon.findOne({
                where: {
                    id: { [Op.eq]: id },
                }
            })
            if (perhitunganplafon === null || perhitunganplafon === "") {
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
        panjang,
        lebar,
        luas,
        namatriplek,
        namapaku,
        namareng,
        hargatriplek,
        hargapaku,
        hargareng,
        jumlahtriplek,
        jumlahtripleklembar,
        jumlahreng,
        jumlahrengbatang,
        hargatotaltriplek,
        hargatotalpaku,
        hargatotalreng,
        hargatotal
    } = req.body
    let errors = await validate(req)
    if (errors.length > 0) return res.status(422).json({ errors });

    try {
        const perhitunganplafon = await PerhitunganPlafon.findOne({
            where: { id: { [Op.eq]: id } }
        })

        if (perhitunganplafon) {
            perhitunganplafon.nama = nama
            perhitunganplafon.panjang = panjang
            perhitunganplafon.lebar = lebar
            perhitunganplafon.luas = luas
            perhitunganplafon.namatriplek = namatriplek
            perhitunganplafon.namapaku = namapaku
            perhitunganplafon.namareng = namareng
            perhitunganplafon.hargatriplek = hargatriplek
            perhitunganplafon.hargapaku = hargapaku
            perhitunganplafon.hargareng = hargareng
            perhitunganplafon.jumlahtripleklembar = jumlahtriplek
            perhitunganplafon.jumlahtripleklembar = jumlahtripleklembar
            perhitunganplafon.jumlahreng = jumlahreng
            perhitunganplafon.jumlahrengbatang = jumlahrengbatang
            perhitunganplafon.hargatotaltriplek = hargatotaltriplek
            perhitunganplafon.hargatotalpaku = hargatotalpaku
            perhitunganplafon.hargatotalreng = hargatotalreng
            perhitunganplafon.hargatotal = hargatotal
            await perhitunganacian.save()
        }

        return res.status(201).json({
            message: "Success Update perhitunganplafon",
            perhitunganplafon
        })
    } catch (err) {
        console.log(err)
    }
}
exports.actionDelete = async function (req, res) {
    const { id } = req.params

    let error = await validateRead(req)
    if (error.length > 0) return res.status(422).json({ error })

    PerhitunganPlafon.findOne({ where: { id: { [Op.eq]: id } } })
        .then((PerhitunganPlafon) => {
            return PerhitunganPlafon.destroy()
        })
        .then((PerhitunganPlafon) => {
            res.status(200).json({ message: "Success Delete", PerhitunganPlafon })
        })
        .catch((err) => {
            res.status(500).json({ message: "Internal server error" })
        })

}