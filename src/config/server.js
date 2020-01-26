const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const PORT = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(PORT, () => {
  console.log(`BACKEND is running on port ${PORT}...`)
})

module.exports = server