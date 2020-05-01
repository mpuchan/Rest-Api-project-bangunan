const router = require('express').Router()
router.get('/', function (request, response) {
    response.send('Im Melon Lord')
})

router.get('/profile', (req, res) => {
    res.redirect('/login')
})
router.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})
module.exports = router