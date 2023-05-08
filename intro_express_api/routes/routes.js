let express = require('express')
let router = express.Router()

router.get('/', function (req, res, next) {
    res.json({'message': 'Hi there! This is an Azure web app, made using Vue!'})
})

module.exports = router
