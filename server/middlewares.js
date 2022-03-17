const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const path = require("path")

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
    app.use(express.static(path.join(__dirname)))
}