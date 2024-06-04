const express = require('express')
const router = express.Router()

const date = new Date().getFullYear()



// define the home page route
router.get('/', (req, res) => {
  res.render('contact', {date:date})
})

module.exports = router