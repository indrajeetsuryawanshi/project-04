const express = require('express')
const router = express.Router()
const urlController = require('../controllers/urlController')


router.post("/test-me")

router.post("/url/shorten", urlController.createUrl)

module.exports = router